import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, ButtonGroup, CircularProgress } from '@mui/material';
// なんかスワイプ機能のために入れたけど使わないかも…
import { useSwipeable } from 'react-swipeable';
// アニメーションもなんかhookがむずくて後回し…
import { animated, useSpring } from '@react-spring/web'

function MatchCard({ user }) {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // カード枚数
  const [liked, setLiked] = useState(null);
  const [skipped, setSkipped] = useState(null);

  const { x } = useSpring({ x: 0 });

  // いいねイベントハンドラ
  const handleLike = () => {
    setLiked(true);
    setSkipped(false);
    console.log('いいねしました');
    setCurrentIndex(prevIndex => prevIndex + 1);
    // カードを左にスライドするアニメーションを設定
  };

  // スキップイベントハンドラ
  const handleSkip = () => {
    setSkipped(true);
    setLiked(false);
    console.log('スキップしました');
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  useEffect(() => {
    if (liked) {
      // カードがいいねまたはスキップされたらアニメーションを開始する
      x.start({ to: -100 });
    } else {
      x.start({ to: 100 });
    }
  }, [currentIndex, liked, skipped, x]);

  useEffect(() => {
    // データのロードが完了したらloadingをfalseに設定する
    setLoading(false);
  }, []);

  if (loading) {
    // データがロード中の場合、くるくるアニメーションを表示する
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <animated.div style={
      {
        display: 'inline-block',
        width: '345px',
        height: '100%',
        transform: x.to((val) => `translateX(${val}px)`)
      }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={user.imageUrl}
          alt={user.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {user.description}
          </Typography>
        </CardContent>
        <ButtonGroup fullWidth variant="contained">
          <Button sx={{ flexGrow: 1 }} color="primary" onClick={handleLike} disabled={liked}>Like</Button>
          <Button sx={{ flexGrow: 1 }} color="secondary" onClick={handleSkip} disabled={skipped}>Skip</Button>
        </ButtonGroup>
      </Card>
      {/* </div> */}
    </animated.div>
  );
}

export default MatchCard;

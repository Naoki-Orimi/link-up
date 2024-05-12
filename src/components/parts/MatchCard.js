import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, ButtonGroup, CircularProgress } from '@mui/material';
// なんかスワイプ機能のために入れたけど使わないかも…
import { useSwipeable } from 'react-swipeable';
import { animated, useSpring } from '@react-spring/web'

function MatchCard({ user }) {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // カード枚数
  const [liked, setLiked] = useState(null);
  const [skipped, setSkipped] = useState(null);

  const handleLike = () => {
    setLiked(true);
    setSkipped(false);
    // いいねの処理を追加する
    console.log('いいねしました');
    nextCard();
  };

  const handleSkip = () => {
    setSkipped(true);
    setLiked(false);
    // スキップの処理を追加する
    console.log('スキップしました');
    nextCard();
  };

  const nextCard = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  useEffect(() => {
    // データのロードが完了したらloadingをfalseに設定する
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(`いま表示しているカードの順番${currentIndex}`);
  }, [currentIndex]);

  if (loading) {
    // データがロード中の場合、くるくるアニメーションを表示する
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <animated.div style={{ display: 'inline-block', width: '345px', height: '100%'}}>
    {/* <div style={{ display: 'inline-block', width: '345px', height: '100%' }}> */}
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

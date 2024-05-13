import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, ButtonGroup, CircularProgress, Alert } from '@mui/material';
// なんかスワイプ機能のために入れたけど使わないかも…
import { useSwipeable } from 'react-swipeable';
// アニメーションもなんかhookがむずくて後回し…
import { animated, useSpring } from '@react-spring/web'

function MatchCard({ user }) {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // カード枚数
  const [liked, setLiked] = useState(null);
  const [skipped, setSkipped] = useState(null);
  const currentUser = user[currentIndex];

  const nextCard = () => {
    console.log(`処理したカード数：${currentIndex}`);
    // 初期表示は実行しないようにする
    if (liked || skipped) {
      console.log('次のカードを用意します。');
      // 次のカードのインデックスを算出
      setCurrentIndex(prevIndex => prevIndex + 1);
      // LIKE・SKIP状態をリセット
      setLiked(null);
      setSkipped(null);
      // アニメーションをリセット
      x.set(0);
    }
  }

  // カードアニメーション
  // useSpringの返り値であるオブジェクトから、xとopacityを定数として定義
  const { x, opacity} = useSpring({
    x: 0,
    opacity: 1,
    config: { tension: 250, friction: 50 },
    onRest: nextCard, // アニメーション終わったら次のカード用意する
  });

  // いいねイベントハンドラ
  const handleLike = () => {
    setLiked(true);
    setSkipped(false);
    console.log('いいねしました');
  };

  // スキップイベントハンドラ
  const handleSkip = () => {
    setSkipped(true);
    setLiked(false);
    console.log('スキップしました');
  };

  // useEffectは非同期のため、上から処理される。
  useEffect(() => {
    if (liked) {
      x.start({ to: -100 });
      opacity.start(0);
    } else if (skipped) {
      x.start({ to: 100 });
      opacity.start(0);
    }
  }, [liked, skipped, x, opacity]);

  useEffect(() => {
    // データのロードが完了したらloadingをfalseに設定する
    setLoading(false);
  }, []);

  // currentUserがなくなったら
  if (typeof (currentUser) === 'undefined') {
    console.log('ユーザーカードがなくなりました！');
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <Alert severity="success">ユーザーカードがなくなりました！</Alert>
      </div>
    )
  }

  // データがロード中の場合、くるくるアニメーションを表示する
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <animated.div style=
      {{
        display: 'inline-block',
        width: '345px',
        height: '100%',
        transform: x.to((val) => `translateX(${val}px)`),
        opacity: opacity,
      }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={currentUser.imageUrl}
          alt={currentUser.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {currentUser.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {currentUser.description}
          </Typography>
        </CardContent>
        <ButtonGroup fullWidth variant="contained">
          <Button sx={{ flexGrow: 1 }} color="primary" onClick={handleLike} disabled={liked}>LIKE</Button>
          <Button sx={{ flexGrow: 1 }} color="secondary" onClick={handleSkip} disabled={skipped}>SKIP</Button>
        </ButtonGroup>
      </Card>
    </animated.div>
  );
}

export default MatchCard;

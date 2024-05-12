import React, { useState, useEffect } from 'react';
import { Button, Modal, Box } from '@mui/material';
import About from './parts/About';
import MatchCard from './parts/MatchCard';
import UserData from '../mocks/userdata';
import SubTextDesign from '../design/SubTextDesign';

function Home() {
    const [showAboutModal, setShowAboutModal] = useState(false);
    const handleShowAboutModal = () => {
      setShowAboutModal(true);
    };
    const handleCloseAboutModal = () => {
      setShowAboutModal(false);
    };


    /** 
     * やりたいこと
     * 
     * ユーザーを3人用意して、ユーザーカードを3枚表示したい。
     * 表示はカードを重ねているような感じがいい。
     * 実際は、1枚目を表示してそれのスワイプが終わったら、
     * 次のユーザーを表示する感じ。
     * 
     * → 検討したが、MatchCardコンポーネントには全てユーザー情報を送ってしまい、
     * 子コンポーネントでレンダリングして次のユーザーを表示した方がSPOF観点としても良き
     * 
    */

    const test = [
        {
            name: 'Michael Jackson',
            imageUrl: '/assets/kkrn_icon_user_1.png',
            email: 'MichelJackson@example.com',
            description: '役職：社長'
        },
        {
            name: 'Paul Smith',
            imageUrl: '/assets/kkrn_icon_user_1.png',
            email: 'PaulSmith@example.com',
            description: '役職：部長'
        },
        {
            name: 'David Marks',
            imageUrl: '/assets/kkrn_icon_user_1.png',
            email: 'DavidMarks@example.com',
            description: '役職：主任'
        },
    ];

    useEffect(() => {
        // userの取得数分、MatchCardコンポーネントを用意する。
        // 別に最初からコンポーネントを用意するのではなく、1枚目を表示させて、
        // 次のカード情報をレンダリングで表示するようにする。
        console.log('Homeコンポーネントがレンダリングされました。');
    }, []);
  
    return (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ ...SubTextDesign, textAlign: 'center' }} >Partner</h1>
          <MatchCard user={ UserData }></MatchCard>
          {/* モーダルボタンどこかで使えるかも？ */}
          {/* <Button variant="contained" onClick={handleShowAboutModal}>Show About Modal</Button>
          <Modal open={showAboutModal} onClose={handleCloseAboutModal}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: 400 }}>
              <About onClose={handleCloseAboutModal} />
            </Box>
          </Modal> */}
        </div>
      );
  }

export default Home;

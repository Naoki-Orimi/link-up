import React, { useState, useEffect } from 'react';
import { Button, Modal, Box } from '@mui/material';
import About from './parts/About';
import MatchCard from './parts/MatchCard';
import UserData from '../mocks/userdata';
import SubTextDesign from '../design/SubTextDesign';

function Home() {
    // const [showAboutModal, setShowAboutModal] = useState(false);
    // const handleShowAboutModal = () => {
    //   setShowAboutModal(true);
    // };
    // const handleCloseAboutModal = () => {
    //   setShowAboutModal(false);
    // };

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

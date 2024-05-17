import React, { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './components/parts/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserEdit from './components/parts/UserEdit';
import UserData from './mocks/userdata';
import Login from './components/Login';


function App() {
  // ここでまずログイン状態を見る必要がある。あればuserの処理がかける。

  // ここはuserId=1でハードコーディングしているが、
  const loginUserData = UserData.find(user => user.id === 1);
  const handleLogin = (username, password) => {
    // ログイン処理
    console.log('Logging in with', username, password);
    
    // ここで認証APIを呼び出すなどの処理を行う
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('API疎通確認');
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/test`);
        console.log(res);
      } catch (e) {
        console.error(e);
      } finally {
        console.log('API疎通完了');
      }
    };

    fetchData();
  });

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserEdit user={ loginUserData }/>} />
          {/* 強制的に飛ばしたい */}
          {/* Reduxでログイン状態管理を行いたい */}
          <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

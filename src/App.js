import React, { useEffect } from 'react';
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
  if (!UserData) {
    return (
      <Router>
        <Routes>
          {/* 強制的に飛ばしたい */}
          {/* Reduxでログイン状態管理を行いたい */}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserEdit user={ loginUserData }/>} />
      </Routes>
    </Router>
  );
}

export default App;

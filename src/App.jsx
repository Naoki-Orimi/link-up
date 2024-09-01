import React, { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './components/parts/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import UserEdit from './components/parts/UserEdit';
import UserData from './mocks/userdata';
import Login from './components/Login';
import Callback from './components/Callback';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

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

  console.log('認証完了していますか？', isAuthenticated);
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Router>
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/callback" element={isAuthenticated ? <Callback /> : <Login />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
        {/* DBのユーザーデータからの値を出す場合 */}
        <Route path="/user" element={isAuthenticated ? <UserEdit user={loginUserData} /> : <Login />} />
        {/* Auth0データからの値を出す場合 */}
        {/* <Route path="/user" element={isAuthenticated ? <UserEdit user={user} /> : <Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

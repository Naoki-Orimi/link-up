import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './components/parts/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserEdit from './components/parts/UserEdit';
import UserData from './mocks/userdata';

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserEdit user={ UserData }/>} />
      </Routes>
    </Router>
  );
}

export default App;

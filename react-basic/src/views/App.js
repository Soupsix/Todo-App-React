import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponents';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Nav/Navigation';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home/home';
import About from './Home/About';
import ListUsers from './Users/ListUsers';
import DetailUsers from './Users/DetailUser';
import Layout from './Layout';

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import todoReducer from '../redux/reducers';
import Login from '../Login';
/**
 * 2 loại component trong React:
 * 1. Class component: sử dụng class để định nghĩa, có thể sử dụng state
 * 2. Function component: sử dụng function để định nghĩa, không có state (trước đây), nhưng giờ đã có thể sử dụng state với React Hooks.
 * 
 * JSX là một hàm hay cú pháp của JS cho phép người dùng viết HTML trong JavaScript.
 */


function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("users"));
    if (user) {
      setIsLogin(true);
    }
    console.log("Reload");
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with Soupsix!
        </p> */}

        {/* <MyComponents /> */}
        <Router>
          <Routes>

            {/* Redirect từ / sang /home */}
            <Route path="/" exact element={<Navigate to="/home" replace />} />
            
            {/* Layout chứa Navigation + Outlet */}

            <Route path='/' element={<Layout />}>
              <Route path='login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
              <Route path="home" element={<Home />} />
              <Route path="add" element={<MyComponents />} />
              <Route path="users" element={
                <>
                  <ListUsers />
                  <ToastContainer />
                </>
              } />
              <Route path="users/:id" element={<DetailUsers />} />
              {/* Đây là route "/todos" chứa nhiều component */}
              <Route
                path="/todos"
                element={
                  <>
                    {/* <MyComponents /> */}
                    <ListTodo />
                    <ToastContainer />
                  </>
                } />
              
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponents';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Nav/Navigation';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home/home';

/**
 * 2 loại component trong React:
 * 1. Class component: sử dụng class để định nghĩa, có thể sử dụng state
 * 2. Function component: sử dụng function để định nghĩa, không có state (trước đây), nhưng giờ đã có thể sử dụng state với React Hooks.
 * 
 * JSX là một hàm hay cú pháp của JS cho phép người dùng viết HTML trong JavaScript.
 */


function App() {
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
            <Route path="/" exact element={<Navigate to="/home" replace />} />

            <Route path='home' element={
              <>

                <Navigation />
                <Home />

              </>} />
            
            <Route path='add' element={<>
                <Navigation />
                <MyComponents />
              </>} />


            {/* Đây là route "/todos" chứa nhiều component */}
            <Route
              path="/todos"
              element={
                <>
                  {/* <MyComponents /> */}
                  <Navigation />
                  <ListTodo />
                  <ToastContainer />
                </>
              } />


          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

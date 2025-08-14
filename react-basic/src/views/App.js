import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponents';

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with Soupsix!
        </p>
        <MyComponents />
      </header>
    </div>
  );
}

export default App;

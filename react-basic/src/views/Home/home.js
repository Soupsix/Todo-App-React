import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Soupsix from '../../assets/images/Soupsix.jpg';

const Home = () => {

    // const navigate = useNavigate(); // thay cho this.props.history
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate("/todos"); // sau 3s mới chuyển
    //         console.log(">>> Check useEffect in Home.js");
    //     }, 3000);

    //     // cleanup tránh memory leak
    //     return () => clearTimeout(timer);
    // }, [navigate]);

    const [email, setEmail] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("users"));
        if (user) {
          setIsLogin(true);
        }
        console.log("Reload");
      }, []);

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page for our React application.</p>
            <div><img src={Soupsix} /></div>
            {isLogin ? (
                <p>Welcome back, {JSON.parse(localStorage.getItem("users")).name}!</p>
            ) : (
                <p>Please log in to access more features.</p>
            )}
        </div>
    );
}

export default Home;
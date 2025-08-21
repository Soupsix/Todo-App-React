import React, { useEffect } from "react";
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


    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page for our React application.</p>
            <div><img src={Soupsix} /></div>
        </div>
    );
}

export default Home;
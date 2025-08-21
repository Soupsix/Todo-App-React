import React from "react";
import './Navigation.scss';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className="topnav">
                <NavLink
                    to="/home"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/todos"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Todo
                </NavLink>

                <NavLink
                    to="/add"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Add
                </NavLink>

                <NavLink
                    to="/users"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Users
                </NavLink>
            </div>
        </>
    )
}

export default Navigation;
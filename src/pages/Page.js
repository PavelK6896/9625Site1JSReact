import React from 'react';
import {Footer} from "../component/Footer";
import {Navbar} from "../component/Navbar";
import {NavLink} from "react-router-dom";


export const Page = () => {

    return (
        <div className="body">
            <div className="wrapper ">
                <Navbar/>
                <div className="container">
                    <NavLink className="nav-link" to="/day"> дни </NavLink>
                    <a className="nav-link" href="https://pavelktrainer1.web.app"> тренер1 </a>
                    <a className="nav-link" href="https://pavelktrainer2.web.app"> тренер2 </a>
                    <NavLink className="nav-link" to="/generator"> генератор1 </NavLink>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


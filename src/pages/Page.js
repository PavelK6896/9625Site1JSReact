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
                    {/*<NavLink className="nav-link" to="/day"> дни </NavLink>*/}
                    <div className="nav-link"><a  href="https://pavelktrainer1.web.app"> тренер1 </a> слепой печати</div>
                    <div className="nav-link"><a  href="https://pavelktrainer2.web.app"> тренер2 </a> устного счета</div>
                    <div className="nav-link"><NavLink  to="/generator"> генератор1 </NavLink>паролей</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


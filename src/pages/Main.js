import React from 'react';
import {Navbar} from "../component/Navbar";
import {Header} from "../component/Header";
import {Footer} from "../component/Footer";

export const Main = () => {
    return (
        <div className="body">
            <div className="wrapper">
                <Navbar/>
                <Header/>
                <main className="main" style={{
                    minHeight: '60vh'
                }}>
                    <div className="container">
                        <div className="mx-auto text-body mx-md-5">
                            <p>Добро пожаловать на мой сайт!</p>
                            <p>Возможно вас что нибуть заинтересует.</p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    )
}


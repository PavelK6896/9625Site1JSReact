import React from 'react';
import {Navbar} from "../component/Navbar";
import {Header} from "../component/Header";
import {Footer} from "../component/Footer";

export const Main = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <main className="main" style={{
                minHeight: '60vh'
            }}>
                <div className="container">

                    <div className="mx-auto text-body mx-md-5">
                        <p>Добро пожаловать на мой сайт!</p>
                        <p>Возможно вас что нибуть
                            заинтересует. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores assumenda autem,
                            corporis,
                            earum est et expedita facere facilis fugiat fugit minus, nemo praesentium provident quidem
                            sapiente
                            sunt tempora ut!
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}


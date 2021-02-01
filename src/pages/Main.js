import React from 'react';
import {Navbar} from "../component/Navbar";
import {Header} from "../component/Header";
import {Footer} from "../component/Footer";

import img1 from "../img/read1.png";
import img2 from "../img/storage2.png";

import {
    Animator,
    batch,
    Fade,
    Move,
    MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
    ZoomOut
} from "react-scroll-motion";

export const Main = () => {
    return (
        <div>
            <Navbar/>
            <ScrollContainer>
                <div className='back-b2'>
                    <ScrollPage page={0}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <Animator animation={ZoomOut(2, -2)}>
                                <Header/>
                                <p>Меня зовут Павел я занимаюсь программированием 2 года.</p>
                            </Animator>
                        </Animator>
                    </ScrollPage>
                </div>
                <div className='back-g2'>
                    <ScrollPage page={1}>
                        <Animator animation={batch(Fade(), Move(), Sticky())}>
                            <Animator animation={MoveIn(500, 500)}>
                                <Animator animation={MoveOut(-500, -500)}>
                                    <div className="mx-auto text-body mx-md-5">
                                        <h2>Добро пожаловать на мой сайт!</h2>
                                        <h3>Возможно вас что заинтересует.</h3>
                                    </div>
                                </Animator>
                            </Animator>
                        </Animator>
                    </ScrollPage>
                </div>
                <div className='back-b1'>
                    <ScrollPage page={2}>
                        <Animator animation={batch(Fade(), Sticky())}>
                            <Animator animation={MoveIn(-1000, -150)}>
                                <Animator animation={MoveOut(2500, 350)}>
                                    <img className="bd-placeholder-img card-img-top"
                                         src={img1}
                                    />
                                </Animator>
                            </Animator>
                        </Animator>
                    </ScrollPage>
                </div>
                <div className='back-g1'>
                    <ScrollPage page={3}>
                        <Animator animation={batch(Fade(), Sticky())}>
                            <Animator animation={MoveIn(1500, -150)}>
                                <img className="bd-placeholder-img card-img-top"
                                     src={img2}
                                />
                            </Animator>
                        </Animator>
                    </ScrollPage>
                </div>
                <Footer/>
            </ScrollContainer>
        </div>
    )
}


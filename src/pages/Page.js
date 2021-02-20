import React from 'react';
import {Footer} from "../component/Footer";
import {
    Animator,
    batch,
    Fade,
    FadeOut,
    MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
    StickyOut,
    ZoomIn
} from "react-scroll-motion";
import {Navbar} from "../component/Navbar";

export const Page = () => {

    return (
        <ScrollContainer>
            <Navbar/>
            <div className='back-g2'>
                <ScrollPage page={0}>
                    <Animator animation={FadeOut(2, -3)}>
                        <div style={{
                            height: '100vh',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <div style={{
                                height: '25vh',
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column"
                            }}>

                                <Animator animation={MoveOut(1000, -500)}> Read 1 </Animator>
                                Server Amazon aws frontend and backend -
                                <br/><a className="a-href" href={"http://18.156.192.31/read1/"}>Read 1</a><br/>
                                Небольшая соцсеть с возможность писать посты и комменты, ставить лайки.

                                <Animator animation={MoveOut(1500, -150)}>
                                    <br/>Стек технологий: git, nginx, sonar lint.
                                    <br/>backend: java 11, spring boot 2, postgres 12, h2, hibernate, jsonwebtoken,
                                    mapstruct, maven, junit 5.
                                    <br/>frontend: angular 10, quill, toastr, ts, js, HTML, CSS, bootstrap 4,
                                    http-server
                                    0.12, jasmine 3.</Animator>


                                <Animator animation={MoveOut(1000, 150)}>
                                    <br/> <a className="a-href"
                                             href={"https://github.com/PavelK6896/9758Read1JavaSpringTSAngular"}>Work
                                    code -
                                    GitHub</a>
                                </Animator>

                            </div>
                        </div>

                    </Animator>
                </ScrollPage>
            </div>

            <div className='back-b1'>
                <ScrollPage page={1}>
                    <Animator animation={batch(Fade(), StickyOut(), MoveOut(0, -200))}>
                        <div>

                            <Animator animation={MoveIn(-1000, 0)}> Storage</Animator>
                            <Animator animation={MoveIn(20, -500)}> <br/><a className="a-href"
                                                                            href={"https://pavelk6896.github.io/9740Storage2JavaSpringAngular/"}>
                                static server GitHub Pages frontend heroku backend</a>
                                <br/><a className="a-href" href={"https://storage2.herokuapp.com/storage2/"}>server
                                    heroku
                                    full</a><br/></Animator>
                            Небольшой rest servic. Позволяющий по https добавлять, удалять, редактировать
                            записи
                            в таблице, осуществлять по ним поиск, а также выгрузить в файл разных форматов.

                            <Animator animation={MoveIn(1500, -1000)}>
                                <br/>Стек технологий:
                                <br/>backend: java 11, spring boot, hibernate, flyway, postgres 12, h2, jjwt,
                                lombok,
                                apache.poi, itextpdf, odftoolkit, swagger, maven, junit.
                                <br/>frontend: angular 10, toastr, ts, js, HTML, CSS, bootstrap 4, jasmine 3.
                            </Animator>
                            <Animator animation={MoveIn(3000, 0)}>
                                <br/><a className="a-href"
                                        href={"https://github.com/PavelK6896/9740Storage2JavaSpringAngular"}>Work
                                code -
                                GitHub</a></Animator>
                        </div>
                    </Animator>
                </ScrollPage>
            </div>

            <div className='back-g2'>
                <ScrollPage page={2}>
                    <Animator animation={batch(Fade(), StickyOut(),MoveOut(50, 250), ZoomIn())}>
                        <div>
                            <Animator animation={MoveIn(-1000, 0)}>Trainer</Animator>
                            <br/>
                            <a className="a-href" href="https://pavelktrainer1.web.app">firebase static server</a>
                            <br/>
                            <Animator animation={MoveIn(-1000, 0)}>Тренажер слепой печати онлайн.</Animator>
                            <Animator animation={MoveIn(1500, -1000)}>
                                <br/>Стек технологий:
                                <br/>react, webpack, git
                            </Animator>
                            <Animator animation={MoveIn(3000, 0)}>
                                <br/><a className="a-href"
                                        href={"https://github.com/PavelK6896/9619Trainer1JSReact"}>Work
                                code -
                                GitHub</a>
                            </Animator>
                        </div>
                    </Animator>
                </ScrollPage>
            </div>

            <div className='back-g1'>
                <ScrollPage page={3}>
                    <Animator animation={batch(Fade(), StickyOut(),  ZoomIn())}>
                        <div>
                            <Animator animation={MoveIn(-1000, 0)}>Trainer</Animator>
                            <br/>
                            <a className="a-href"    href="https://pavelktrainer2.web.app">firebase static server</a>
                            <br/>
                            <Animator animation={MoveIn(-1000, 0)}>Тренажер устного счета онлайн.</Animator>
                            <Animator animation={MoveIn(1500, -1000)}>
                                <br/>Стек технологий:
                                <br/>angular 10, rxjs 6, TS, webpack, git
                            </Animator>
                            <Animator animation={MoveIn(3000, 0)}>
                                <br/><a className="a-href"
                                        href={"https://github.com/PavelK6896/9679Trainer2TSAngular"}>Work
                                code -
                                GitHub</a>
                            </Animator>
                        </div>
                    </Animator>
                </ScrollPage>
            </div>
            <Footer/>
        </ScrollContainer>
    )
}


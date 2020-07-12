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
                            <p>Все что я хочу сказать: рот нужен что бы кушать.</p>
                            <p>Раньше думал, что мир круглый теперь думаю, что мир плоский, корни комнатного растения
                                растут по спирали значит солнце летит по спирали вокруг блек хола mlechnogo paht, а
                                Земля шарик, катящийся по миру.</p>
                            <p>Жутко становиться, когда чювока в Юрском периоде жрет червяк начиная медленно
                                заглатывать с головы, тихоходка больших размеров тоже наверное чювока скушает.</p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    )
}


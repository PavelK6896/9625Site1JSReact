import React, {useState} from 'react';
import {Footer} from "../component/Footer";
import {Navbar} from "../component/Navbar";

import * as data1 from "../context/data1";

const d2 = Object.values(data1);
console.log(d2)

export const Moon = () => {


    const calculateMoonDay1 = (day, month, year) => {
        if (month <= 2) {
            month += 12;
            year -= 1;
        }
        let nc = Math.floor(year / 100);
        let vc = ((Math.floor(nc / 3) + Math.floor(nc / 4)) + 6) - nc;
        let a = (year / 19);
        let b = ((a - parseInt(a)) * 209);
        let c = (b + month + day + vc) / 30;
        return Math.round(((c - parseInt(c)) * 30) + 1);
    };

    const calculateMoonDay2 = (d, m, y) => {
        let yearFirst1 = 2013
        let yearMoon1 = 0
        const yearMoon2 = (yearFirst2) => {
            yearMoon1 = y - yearFirst2;
            if (yearMoon1 > 20) {
                yearFirst1 += 19;
                yearMoon2(yearFirst1)
            } else if (yearMoon1 < 0) {
                yearFirst1 -= 19;
                yearMoon2(yearFirst1)
            }
            return yearMoon1
        }
        let l = yearMoon2(yearFirst1);
        return ((l * 11) - 14 + d + m) % 30
    }

    const date = new Date();
    const moonDay = calculateMoonDay2(date.getDate(), date.getMonth() + 1, date.getFullYear())

    const [state, setState] = useState({
        check1: false,
        check2: false,
        text1: d2[0][moonDay - 1],
        text2: 'седня включительно',
        text3: d2[1],
        current: 0
    })

    return (
        <div className="body">
            <div className="wrapper">
                <Navbar/>
                <div className="container"
                     style={{
                         marginTop: '4rem',
                         marginBottom: '5px',
                         textAlign: "center"
                     }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            borderRadius: '5px'
                        }}
                    >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            width: '25%',
                            background: '#dddde7',
                            overflowY: "auto",
                            borderRadius: '5px',
                            marginRight: '5px',

                        }}
                        >
                            {d2[2].map((v, k) => {
                                return (
                                    <div key={k} style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                    }}>
                                        {/*<div> {k + 1} </div>*/}
                                        <div>{v}</div>
                                        <b style={{
                                            color: d2[1][state.text1.interpretation[k]].color
                                        }}>
                                            {d2[1][state.text1.interpretation[k]].key1}
                                        </b>

                                    </div>
                                )
                            })}
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: '65%',
                        }}
                        >
                            <div style={{
                                marginBottom: '5px',
                                background: '#6565ad',
                                borderRadius: '5px',
                            }}>
                                {moonDay}
                            </div>
                            <div style={{
                                background: '#999',
                                borderRadius: '5px'
                            }}>
                                {state.text1.text}
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            width: '11%',
                            background: 'rgba(152,161,177,0.7)',
                            borderRadius: '2px',
                            marginLeft: '5px',
                        }}
                        >
                            {d2[0].map((v, k) => {
                                return <button
                                    className='btn btn-hover-moon'
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        margin: '1px',
                                    }}
                                    key={k}
                                    onClick={() => {
                                        setState({...state, text1: v})
                                    }}
                                > {k + 1} </button>
                            })}

                        </div>

                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}


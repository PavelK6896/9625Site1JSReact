import React, {useState} from 'react';
import {Footer} from "../component/Footer";
import {Navbar} from "../component/Navbar";

import * as data1 from "../context/data1";
import lunarDays from "lunardays";
import {NavLink} from "react-router-dom";

const d2 = Object.values(data1);
const date = new Date();
const latitude = 55.09
const longitude = 36.

const currentCalculateDay = (days) => {
    let countCalculateDay = 0
    if (date > days[0].end._d) {
        countCalculateDay = 1
    }
    return countCalculateDay;
};

export const Moon = () => {
    const [state, setState] = useState(init => {
        let date2 = date.toISOString().substring(0, 10)
        let days = lunarDays(date2, latitude, longitude)
        let countCalculateDay = currentCalculateDay(days);
        const moonDay2 = days[countCalculateDay].number
        return {
            date2,
            days,
            day: date.getDay(),
            countCalculateDay,
            moonDay: moonDay2,
            moonDay2: moonDay2,
            moonStart: days[countCalculateDay].start._d.toLocaleString(),
            moonEnd: days[countCalculateDay].end._d.toLocaleString(),
            check1: false,
            check2: false,
            text1: d2[0][moonDay2 - 1],
            text2: 'седня включительно',
            text3: d2[1],
            current: 0
        }
    })

    const updateDays = (k) => {
        let days = lunarDays(k, latitude, longitude)
        setState({
            ...state,
            date2: k,
            days,
            day: +k.substring(k.length - 2, k.length),
            moonDay: days[0].number,
            text1: d2[0][days[0].number - 1],
            countCalculateDay: currentCalculateDay(days),
        })
    }

    let dateMonthCurrent = []
    Date.prototype.addDays = function (days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    for (let i = 0; i <= 7; i++) {
        let date9 = new Date();
        dateMonthCurrent.push(date9.addDays(i).toISOString().substring(0, 10))
    }

    return (
        <div className="body">
            <div className="wrapper">
                <Navbar/>
                <div className="nav-item">
                    <NavLink className="nav-link nav-ad1" to="/day"
                             style={{
                                 marginTop: '5rem',
                                 zIndex: 99,
                             }}
                    > day </NavLink></div>
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
                            borderRadius: '5px',
                        }}
                    >
                        {/*1*/}
                        <div
                            style={{
                                width: '20%',
                                marginRight: '5px',
                            }}>

                            <div style={{
                                marginBottom: '5px',
                                background: '#53a389',
                                borderRadius: '5px',
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                            }}>
                                {state.days[state.countCalculateDay]?.number}
                                <div>
                                    {state.days[state.countCalculateDay]?.start._d.toLocaleString()}
                                    <br/>
                                    {state.days[state.countCalculateDay]?.end._d.toLocaleString()}
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                {
                                    dateMonthCurrent.map((k, v) => {
                                        return <button
                                            key={k}
                                            className='btn btn-hover-moon'
                                            style={{
                                                height: '35px',
                                                margin: '1px',
                                            }}
                                            onClick={() => updateDays(k)}
                                        >
                                            {k}
                                        </button>
                                    })
                                }
                            </div>

                            <div style={{
                                marginTop: '10px',
                                borderRadius: '5px',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                            }}>
                                {
                                    state.days.map((v, k) => {
                                        return <div
                                            style={{
                                                marginBottom: '5px',
                                                background: '#49aa70',
                                                borderSpacing: '5px',
                                                borderColor: '#94a796',
                                                borderRadius: '5px',
                                                borderStyle: 'solid',
                                            }}
                                            key={k}>  {v?.number} = {v?.start._d.toLocaleString()} - {v?.end._d.toLocaleString()}</div>
                                    })
                                }
                            </div>
                        </div>
                        {/*2*/}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            width: '35%',
                            background: '#dddde7',
                            borderRadius: '5px',
                            marginRight: '5px',

                        }}
                        >
                            <button style={{
                                marginBottom: '5px',
                                background: '#70a172',
                                borderRadius: '5px',
                            }}
                                    className='btn btn-hover-moon'
                                    onClick={() => updateDays(date.toISOString().substring(0, 10))}
                            >
                                {date.toLocaleString()}
                            </button>
                            {d2[2].map((v, k) => {
                                return (
                                    <div key={k} style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        border: '0px',
                                        borderBottom: '1px',
                                        height: '20px',
                                        borderStyle: 'solid',
                                        borderColor: '#2b2b31',

                                    }}>

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
                        {/*3*/}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: '45%',
                        }}
                        >
                            <div style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                background: 'rgba(152,161,177,0.7)',
                                borderRadius: '2px',
                                marginRight: '5px',
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
                                            setState({...state, text1: v, moonDay: k + 1})
                                        }}
                                    > {k + 1} </button>
                                })}

                            </div>
                            <div style={{
                                marginBottom: '5px',
                                marginTop: '5px',
                                background: '#6565ad',
                                borderRadius: '5px',
                            }}>
                                {state.moonDay}
                            </div>
                            <div style={{
                                background: '#d2dbba',
                                borderRadius: '5px'
                            }}>
                                {state.text1.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


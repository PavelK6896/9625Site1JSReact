import React, {useState} from 'react';
import {Footer} from "../component/Footer";
import {Navbar} from "../component/Navbar";

import * as data1 from "../context/data1";
import lunarDays from "lunardays";

const d2 = Object.values(data1);
console.log(d2)

export const Moon = () => {

    const date = new Date();
    const latitude = 55.09
    const longitude = 36.65
    const days = lunarDays(date.toISOString().substring(0, 10), latitude, longitude)
    let countCalculateDay = 0
    if (date > days[0].end._d) {
        countCalculateDay = 1
    }

    const moonDay2 = days[countCalculateDay].number


    let dateMonthCurrent = []

    function getLastDayOfMonth(year, month) {
        let date7 = new Date(year, month + 1, 0);
        return date7.getDate()
    }


    let date8 = getLastDayOfMonth(date.getFullYear(), date.getMonth())


    for (let i = 0; i < date8; i++) {
        let date9 = new Date();
        date9.setDate(i + 1)
        dateMonthCurrent.push(date9.toLocaleDateString())
    }


    const [state, setState] = useState({
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
                            flexWrap: "wrap",
                            justifyContent: "center",
                            width: '20%',
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

                            <br/>
                            <br/>
                            <br/>
                            <div
                                style={{}}>
                                {
                                    dateMonthCurrent.map((k, v) => {
                                        return <button
                                            key={k}
                                            className='btn btn-hover-moon'
                                            style={{
                                                height: '35px',
                                                width: '35px',
                                                margin: '1px',

                                            }}
                                        >
                                            {k.substring(0, 2)}
                                        </button>
                                    })

                                }


                            </div>

                        </div>

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
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: '45%',
                        }}
                        >
                            <div style={{
                                marginBottom: '5px',
                                background: '#53a389',
                                borderRadius: '5px',
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                            }}>
                                {state.moonDay2}
                                <div>
                                    {state.moonStart}
                                    <br/>
                                    {state.moonEnd}
                                </div>
                            </div>

                            <div style={{
                                marginBottom: '5px',
                                background: '#70a172',
                                borderRadius: '5px',
                            }}>
                                {date.toLocaleString()}
                            </div>

                            <div style={{
                                marginBottom: '5px',
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


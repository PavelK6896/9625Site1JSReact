import React, {useState} from 'react';
import {Footer} from "../component/Footer";
import {Navbar} from "../component/Navbar";


export const Day = () => {


    const dayN = function (year, month, day) {
        let monthS = {0: 31, 1: 28, 2: 31, 3: 30, 4: 31, 5: 30, 6: 31, 7: 31, 8: 30, 9: 31, 10: 30, 11: 31};
        let monthN = 0;

        const leapYear = function (y) {
            return !(y & 3 || !(y % 25) & y & 15);
        };

        let leapDay = 0;

        for (let i = 1; i < year; i++) {
            if (leapYear(i)) {
                leapDay++;
            }
        }

        let yearN = 365 * year + leapDay;

        for (let i = 0; i < month; i++) {
            monthN += monthS[i];
        }

        return yearN + monthN + day;
    }

    const data1 = new Date();
    const dataDay1 = dayN(data1.getUTCFullYear(), data1.getUTCMonth(), data1.getUTCDate());
    const dataDay2 = dayN(1994, 0, 28);
    const dataDay3 = dataDay1 - dataDay2;



    const [state, setState] = useState({
        check1: false,
        check2: false,
        dataDay1: dataDay1,
        dataDay2: dataDay2,
        dataDay3: dataDay3,
        dataDay5: dataDay3,
        text1: 'с единицы',
        text2: 'седня включительно',
    })


    const onChangeDay = (event) => {
        if (event.target.checked) {
            setState(
                prevState => {
                    return {
                        ...prevState,
                        check1: !prevState.check1,
                        dataDay1: prevState.dataDay1 + 1,
                        dataDay2: prevState.dataDay2 + 1,
                        dataDay3: prevState.dataDay3 + 1,
                        dataDay5: prevState.dataDay5 + 1,
                        text1: 'с нуля'
                    }
                }
            )
        } else {
            setState(
                prevState => {
                    return {
                        ...prevState,
                        check1: !prevState.check1,
                        dataDay1: prevState.dataDay1 - 1,
                        dataDay2: prevState.dataDay2 - 1,
                        dataDay3: prevState.dataDay3 - 1,
                        dataDay5: prevState.dataDay5 - 1,
                        text1: 'с единицы'
                    }
                }
            )
        }
    }


    const onChangeToDay = (event) => {
        if (event.target.checked) {
            setState(
                prevState => {
                    return {
                        ...prevState,
                        check2: !prevState.check2,
                        dataDay1: prevState.dataDay1 + 1,
                        dataDay2: prevState.dataDay2 + 1,
                        dataDay3: prevState.dataDay3 + 1,
                        dataDay5: prevState.dataDay5 + 1,
                        text2: 'седня не включая',
                    }
                }
            )
        } else {
            setState(
                prevState => {
                    return {
                        ...prevState,
                        check2: !prevState.check2,
                        dataDay1: prevState.dataDay1 - 1,
                        dataDay2: prevState.dataDay2 - 1,
                        dataDay3: prevState.dataDay3 - 1,
                        dataDay5: prevState.dataDay5 - 1,
                        text2: 'седня включительно',
                    }
                }
            )
        }
    }

    const onChangeDate = (event) => {
        const date = event.target.value.split('-')
        const dataDay4 = dayN(+date[0], (date[1] - 1), +date[2]);
        setState(
            prevState => {
                return {
                    ...prevState,
                    dataDay5:  (dataDay4 - dataDay2)
                }
            })
    }

    return (
        <div className="body">
            <div className="wrapper">
                    <Navbar/>
                    <div className="container" style={{
                        marginTop: '5rem'
                    }}>
                        <p>
                            сегодня:&nbsp;
                            {state.dataDay3.toString().slice(0, state.dataDay3.toString().length - 3) +
                            " " + state.dataDay3.toString().slice(state.dataDay3.toString().length - 3, state.dataDay3.toString().length)}
                            &nbsp;день
                        </p>
                        <p>
                            сегодня:&nbsp;
                            {state.dataDay1.toString().slice(0, state.dataDay1.toString().length - 3) +
                            " " + state.dataDay1.toString().slice(state.dataDay1.toString().length - 3, state.dataDay1.toString().length)}
                            &nbsp;день нашей эры
                        </p>
                        <p><input type={'checkbox'} onChange={onChangeDay}/>{state.text1}</p>
                        <p><input type={'checkbox'} onChange={onChangeToDay}/>{state.text2}</p>
                        <p><input type={'date'} onChange={onChangeDate}/> date</p>
                        <p>
                            {state.dataDay5.toString().slice(0, state.dataDay5.toString().length - 3) +
                            " " + state.dataDay5.toString().slice(state.dataDay5.toString().length - 3, state.dataDay5.toString().length)}
                            &nbsp;день
                        </p>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}


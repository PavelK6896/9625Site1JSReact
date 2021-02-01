import React, {useContext, useState} from "react";
import {Navbar} from "../component/Navbar";
import {Footer} from "../component/Footer";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../component/Loader";


export const Contacts = () => {


    const {showLoader, sendMessage, loading} = useContext(FirebaseContext)

    const [state, setState] = useState(
        {
            name: "",
            email: "",
            message: "",
            subject: "",
            info: ""
        }
    )

    function nameH(e) {
        setState(
            {
                ...state,
                name: e.target.value
            })
    }

    function emailH(e) {
        setState(
            {
                ...state,
                email: e.target.value
            })

    }

    function messageH(e) {

        setState(
            {
                ...state,
                message: e.target.value
            })

    }

    function subjectH(e) {

        setState(
            {
                ...state,
                subject: e.target.value
            })
    }

    function deleteH(e) {
        setState(
            {
                ...state,
                name: "",
                email: "",
                message: "",
                subject: "",
            }
        )
    }


    function send(e) {


        if (state.name === "") {
            setState({
                ...state,
                info: "Введите имя"
            })
            return
        }

        if (state.email === "") {
            setState({
                ...state,
                info: "Введите email"
            })
            return
        }
        if (state.message === "") {
            setState({
                ...state,
                info: "Введите message"
            })
            return
        }

        showLoader()
        sendMessage(
            state.message,
            "имя: " + state.name + " почьта: " + state.email + " тема: " + state.subject
        ).then(() => {
            setState({
                ...state,
                name: "",
                email: "",
                message: "",
                subject: "",
                info: "Сообщение отправленно"
            })
        }).catch(() => {
            setState({
                ...state,
                info: "Ошибка отправки"
            })
        })
    }

    return (
        <div className="body">
            <div className="wrapper">
                <div style={{
                    height: '75px'
                }}>
                    <Navbar/>
                </div>
                <main className="main">
                    <div className="container  d-flex justify-content-center">
                        <div className="">
                            <label>Напишите: <span style={{
                                color: "red"
                            }}>{loading ? <Loader/> : state.info}</span></label>

                            <div>
                                <div className=" col-fluid-6">
                                    <div className="form-group">
                                        <input type="name" className="form-control" value={state.name} onChange={nameH}
                                               placeholder="Имя"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" value={state.email}
                                               onChange={emailH}
                                               placeholder="name@example.com"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" value={state.subject}
                                               onChange={subjectH} placeholder="Тема"
                                        />
                                    </div>
                                    <textarea className="form-control" value={state.message} onChange={messageH}
                                              rows="3"/>
                                </div>
                                <div className="d-flex flex-row">
                                    <button onClick={() => send()} className="btn  btn-outline-info my-3 ">send</button>
                                    <button onClick={() => deleteH()}
                                            className="btn btn-outline-secondary ml-3  my-3 ">clear
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around align-items-center ">
                                <div className="text-body">
                                    <h5>Contact:</h5>
                                    <div className="d-flex flex-row">
                                        <div className="d-flex flex-column align-items-end">
                                            <span>phone&nbsp;</span>
                                            <span>telegram&nbsp;</span>
                                            <span>mail&nbsp;</span>
                                        </div>
                                        <div className="d-flex flex-column ">
                                            <span>+79208776896</span>
                                            <span>pavelk6896</span>
                                            <span>79208776896@yandex.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

import React, {useState} from "react";
import {Navbar} from "../component/Navbar";
import {Footer} from "../component/Footer";
import {address} from "../../setting";


export const Contacts = () => {

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


    async function send(e) {
        // let formData = new FormData();

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

        if (state.subject === "") {
            setState({
                ...state,
                info: "Введите тему"
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

        setState({
            ...state,
            name: "",
            email: "",
            message: "",
            subject: "",
            info: "Сообщение отправленно"
        })


        state.message = "имя " + state.name + " маил " + state.email + " сообщение " + state.message
        await fetch(
            address, //'http://localhost:8081/app1/',
            {
                method: 'POST',
                body: JSON.stringify({subject: state.subject, message: state.message})
            }
        )//.then(result => result.json().then(console.log))
    }

    return (
        <div className="body">
            <div className="wrapper">
                <Navbar/>
                <main className="main">
                    <div className="container">
                        <div className="col-3 align-items-end">
                            <label>Напишите: <span style={{
                                color: "red"
                            }}>{state.info}</span></label>
                            <div>
                                <div className="form-group">
                                    <input type="name" className="form-control" value={state.name} onChange={nameH}
                                           placeholder="Имя"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" value={state.email} onChange={emailH}
                                           placeholder="name@example.com"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={state.subject}
                                           onChange={subjectH} placeholder="Тема"
                                    />
                                </div>
                                <textarea className="form-control" value={state.message} onChange={messageH} rows="3"/>
                                <button onClick={() => send()}>send</button>
                                <button onClick={() => deleteH()} className="btn  mb-3">delete</button>
                            </div>
                            <div className="d-flex justify-content-around align-items-center">
                                <div className="text-body">
                                    <h3>Адрес:</h3>
                                    <p>+7<br/>M<br/>7@mail.com</p>
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

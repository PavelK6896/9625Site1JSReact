import React from "react";
import {Navbar} from "../component/Navbar";
import {Footer} from "../component/Footer";

export const Contacts = () => {
    return (
        <div className="min-vh-100">
            <Navbar/>
            <main className="main">
                <div className="container">
                    <label htmlFor="exampleFormControlInput1">Напишите мне</label>
                    <form>
                        <div className="form-group">
                            <input type="name" className="form-control" id="exampleFormControlInput2"
                                   placeholder="Имя"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleFormControlInput19"
                                   placeholder="Тема"/>
                        </div>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
                    </textarea>
                        <button type="submit" className="btn btn-dark mb-3 float-md-right">send</button>
                        <button type="reset" className="btn btn-dark mb-3">delete</button>
                    </form>

                    <div className="d-flex justify-content-around align-items-center">
                        <div className="text-body">
                            <h3>Адрес:</h3>
                            <p>+78209596986<br/>Moscow<br/>78209596986@mail.com</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

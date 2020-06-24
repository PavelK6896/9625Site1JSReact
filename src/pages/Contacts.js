import React from "react";
import {Navbar} from "../component/Navbar";
import {Footer} from "../component/Footer";

export const Contacts = () => {
    return (
        <div className="body">
            <div className="wrapper">
                <Navbar/>
                <main className="main">
                    <div className="container">
                        <div className="col-3 align-items-end">
                            <label htmlFor="exampleFormControlInput1">Напишите:</label>
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
                                <button type="submit" className="btn  mb-3 float-md-right">send</button>
                                <button type="reset" className="btn  mb-3">delete</button>
                            </form>

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

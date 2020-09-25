import React, {useState} from "react";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    const [state, setState] = useState({hover: false});

    function toggleHover() {
        setState({hover: true})
    }

    function toggleNoHover() {
        setState({hover: false})
    }

    let linkStyle;
    if (state.hover) {
        linkStyle = {
            position: 'absolute',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
        }
    } else {
        linkStyle = {
            display: 'none'
        }
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg color">
            <div className="container">
                <NavLink className="navbar-brand" to="/main" width="30" height="30" alt=""
                         style={{
                             border: '1px solid #ccc',
                             borderRadius: '3px',
                             padding: '5px',
                         }}
                >
                    PK
                </NavLink>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/page"
                        > Страницы </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contacts"
                        > Контакты </NavLink>
                    </li>
                </ul>
                <hr/>
            </div>
        </nav>
    )
}

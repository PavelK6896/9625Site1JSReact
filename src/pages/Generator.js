import React, {useState} from 'react';
import {Navbar} from "../component/Navbar";

import {Footer} from "../component/Footer";

export const Generator = () => {
    const [state, setState] = useState({text1: generateText(12), value1: 12})

    function generateText(length) {
        let text = "";
        for (let i = 0; i < length / 4; i++) {
            for (let j = 0; j < 4; j++) {
                let n = Math.round(Math.random() * (arr[j].length - 1));
                text = text + arr[j][n];
            }
        }
        return text;
    }

    return (
        <div className="body">
            <div className="wrapper">
                <Navbar/>
                <div className="container">
                    <h1>Генератор паролей</h1>
                    <main className="main" style={{
                        minHeight: '60vh'
                    }}>
                        <input type="number"
                               value={state.value1}
                               step={4}
                               onChange={(event1) => {
                                   setState({
                                       text1: (generateText(event1.target.value - 1)),
                                       value1: event1.target.value
                                   })
                               }}
                               style={{maxWidth: '50px'}}/>
                        <button style={{maxWidth: '50px', marginLeft: '10px'}} onClick={() => {
                            setState({
                                text1: (generateText(state.value1)),
                                value1: state.value1
                            })
                        }}>еще
                        </button>

                        <div>Вашь пароль длиной {state.text1.length}:
                            <pre style={{fontSize: '50px'}}>{state.text1}</pre>
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const arr = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~']
];
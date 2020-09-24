import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Contacts} from "./pages/Contacts";
import {Main} from "./pages/Main";
import {Generator} from "./pages/Generator";
import {Day} from "./pages/Day";
import {Page} from "./pages/Page";
import {FirebaseState} from "./context/firebase/FirebaseState";


function App() {
    return (
        <FirebaseState>
            <BrowserRouter>
                <Switch>
                    <Route path={'/main'} exact component={Main}/>
                    <Route path={'/contacts'} exact component={Contacts}/>
                    <Route path={'/page'} exact component={Page}/>
                    <Route path={'/generator'} exact component={Generator}/>
                    <Route path={'/day'} exact component={Day}/>

                    <Route path={''} component={Main}/>
                </Switch>
            </BrowserRouter>
        </FirebaseState>
    );
}

export default App;

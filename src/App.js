import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Contacts} from "./pages/Contacts";
import {Main} from "./pages/Main";
import {Generator} from "./pages/Generator";


function App() {
    return (
        <Switch>
            <Route path={'/main'} exact component={Main}/>
            <Route path={'/contacts'} exact component={Contacts}/>
            <Route path={'/generator'} exact component={Generator}/>

            <Route path={''} component={Main}/>
        </Switch>
    );
}

export default App;

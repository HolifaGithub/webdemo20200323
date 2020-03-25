import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom";
import APP from './App'
import Introduct from './pages/introduct/index'
import Travel from './pages/travel/index.jsx'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={APP}/>
            <Route exact path="/introduct" component={Introduct}/>
            <Route exact path="/travel" component={Travel}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import APP from './App'
import Introduct from './pages/introduct/index'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={APP}/>
            <Route exact path="/introduct" component={Introduct}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
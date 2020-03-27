import React from 'react'
import { Route, Switch,BrowserRouter } from "react-router-dom";
import APP from './App'
import Introduct from './pages/introduct/index'
import Travel from './pages/travel/index.jsx'
import Advertisement from './pages/advertisement/index'

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={APP}/>
            <Route  path="/introduct" component={Introduct}/>
            <Route  path="/travel" component={Travel}/>
            <Route  path="/advertisement" component={Advertisement}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;
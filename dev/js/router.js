"use strict";
import React from "react";
import {hashHistory, IndexRoute, Route, Router} from "react-router";

import App from './Components/App'

import SelectDate from './Components/SelectDate'

import Valutes from './Components/Valutes'
const createRouter = (getState, dispatch) => {


    return (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={SelectDate}/>
             <Route path="/currency" component={Valutes}/>
            </Route>
        </Router>
    )
}

export default createRouter;

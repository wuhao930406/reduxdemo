/**
 * Created by kurosaki on 2018/4/20.
 */
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import ThemeSwitch from '../components/ThemeSwitch';
import NameSwitch from '../components/NameSwitch';

const Routers = () => (
        <Switch>
            <Route path="/" exact component={ThemeSwitch}/>
            <Route path="/index/theme" component={ThemeSwitch}/>
            <Route path="/index/name" component={NameSwitch}/>
        </Switch>
)
export default Routers
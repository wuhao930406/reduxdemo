/**
 * Created by kurosaki on 2018/4/20.
 */
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    history
} from 'react-router-dom';
import Index from '../components/Index';
import NameSwitch from '../components/NameSwitch';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

const ReactRouter = () => (
    <Router history={customHistory}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/index" component={Index}/>
            <Route path="/about" component={NameSwitch}/>
        </Switch>
    </Router>
)
export default ReactRouter
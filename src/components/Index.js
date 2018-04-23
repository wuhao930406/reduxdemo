/**
 * Created by kurosaki on 2018/4/20.
 */
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import { withRouter } from 'react-router-dom';
let Headers = withRouter(Header);
let Contents = withRouter(Content);

class Index extends Component {
    render () {
        return (
            <div>
                <Headers></Headers>
                <Contents></Contents>
            </div>
        )
    }
}


export default Index



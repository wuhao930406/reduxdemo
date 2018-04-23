/**
 * Created by kurosaki on 2018/4/20.
 */
import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Routers from '../router/Routers'
import '../App.css'

class Content extends Component {
    render () {
        return (
            <div>
                <div className="nav">
                    <Link to="/index/theme">theme</Link>
                    <Link to="/index/name">name</Link>
                </div>
                <Routers></Routers>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        themeColor:state.themeColor
    }
}
Content = connect(mapStateToProps)(Content)


export default Content
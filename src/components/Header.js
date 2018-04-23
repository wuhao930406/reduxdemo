/**
 * Created by kurosaki on 2018/4/20.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Badge } from 'antd';
import '../App.css'

class Header extends Component {
    render () {
        return (
        <div className="App-header">
            <span style={{ margin: 24,display:"block" }}>
              <Badge style={{ backgroundColor: this.props.themeColor }} count={1}><Avatar shape="square" icon="user" /></Badge>
            </span>
            <p>{this.props.userName}</p>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor,
        userName:state.userName
    }
}
Header = connect(mapStateToProps)(Header)

export default Header



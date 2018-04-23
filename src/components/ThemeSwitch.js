/**
 * Created by kurosaki on 2018/4/20.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd'
class ThemeSwitch extends Component {
    handleSwitchColor (color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }
    render () {
        return (
            <div style={{padding:24,width:250,display:"flex",justifyContent:"space-between"}}>
                <Button
                    style={{ color: this.props.themeColor }}
                    onClick={()=>this.handleSwitchColor('red')}>Red</Button>
                <Button
                    style={{ color: this.props.themeColor }}
                    onClick={()=>this.handleSwitchColor('blue')}>Blue</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch
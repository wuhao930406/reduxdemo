/**
 * Created by kurosaki on 2018/4/20.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd'

class NameSwitch extends Component {
    constructor(){
        super()
        this.state={
            userName:["Orhimi","Kurosaki"],
        }
    }

    handleSwitchName (name) {
        if (this.props.onSwitchName) {
            this.props.onSwitchName(name)
        }
    }
    render () {
        let {userName} = this.state;
        return (
            <div  style={{padding:24,width:250,display:"flex",justifyContent:"space-between"}}>
                <Button
                    onClick={()=>this.handleSwitchName(userName[0])}>{userName[0]}</Button>
                <Button
                    onClick={()=>this.handleSwitchName(userName[1])}>{userName[1]}</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchName: (name) => {
            dispatch({ type: 'CHANGE_NAME', userName: name })
        }
    }
}
NameSwitch = connect(mapStateToProps, mapDispatchToProps)(NameSwitch)

export default NameSwitch
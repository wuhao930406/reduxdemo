import React, { Component } from 'react'
import store from './core/store/store'
import {Provider } from 'react-redux'
import ReactRouter from './router/mainRoute'

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <ReactRouter>
                </ReactRouter>
            </Provider>
        )
    }
}
export default App
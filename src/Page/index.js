import React, { Component } from 'react'
import Child from './Child'
import { connect } from 'react-redux'
import { addTodo } from '../action.js'

class Page extends Component {
    handleClick(e) {
        this.props.dispatch(addTodo(e.target.innerText.trim()))
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick.bind(this)}>Hello, world</h1>
                <Child name="李乾坤" />
            </div>
        )
    }
}

Page = connect()(Page)

export default Page

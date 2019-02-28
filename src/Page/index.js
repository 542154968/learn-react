import React, { Component } from 'react'
import Child from './Child'
import { connect } from 'react-redux'
import { addTodo } from '../action.js'
import Num from '../Num/'

class Page extends Component {
    handleClick(e) {
        // 通过dispatch触发
        this.props.dispatch(
            addTodo(
                `${e.target.innerText.trim()} ${new Date().toLocaleString()}`
            )
        )
        console.log('添加成功！')
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <Num />
                <button onClick={this.handleClick.bind(this)}>
                    添加一个todoList
                </button>
                <Child name="李乾坤" />
            </div>
        )
    }
}

Page = connect()(Page)

export default Page

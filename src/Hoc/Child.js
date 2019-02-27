import React, { Component } from 'react'
import hoc from './tools'

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '我是子吱吱吱吱'
        }
    }
    componentDidMount() {
        console.log(this, 'zi')
    }
    render() {
        return <p>我是子 我接收到了高阶组件传递来的信息——{this.props.name}</p>
    }
}

export default hoc(Child)

import React, { Component } from 'react'
import Child from './Child'
import hoc from './tools'
//使用高阶组件
class MyComponent extends Component {
    render() {
        return (
            <div>
                <p>我是爸爸 接收到的高阶组件的信息 {this.props.name}</p>
                <Child />
            </div>
        )
    }
}
export default hoc(MyComponent)

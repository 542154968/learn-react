import React, { Component } from 'react'

export default function hoc(ComponentClass) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name: '我是hoc函数'
            }
        }
        componentDidMount() {
            console.log('hoc', this, '我是高阶组件')
        }

        render() {
            return <ComponentClass name={this.state.name} {...this.props} />
        }
    }
}

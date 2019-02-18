import React, { Component } from 'react'
import Child from './Child'

class Page extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <Child name="李乾坤" />
            </div>
        )
    }
}

export default Page

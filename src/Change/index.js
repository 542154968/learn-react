import React, { Component } from 'react'

class Change extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    hanldeClick = status => {
        this.setState({
            status
        })
    }

    render() {
        if (this.state.status === true) {
            return <h4 onClick={this.hanldeClick.bind(this, false)}>打开</h4>
        } else {
            return <h4 onClick={this.hanldeClick.bind(this, true)}>关闭</h4>
        }
    }
}

export default Change

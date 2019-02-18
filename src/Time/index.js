import React, { Component } from 'react'

class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            name: 'lqk'
        }
    }

    componentDidMount() {
        this.timeId = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick() {
        this.setState({
            date: new Date(),
            name: `李乾坤${~~(Math.random() * 1000)}`
        })
    }

    render() {
        return (
            <h3>
                现在时间是 {this.state.date.toLocaleTimeString()}{' '}
                {this.state.name}
            </h3>
        )
    }
}

export default Time

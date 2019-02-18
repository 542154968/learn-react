import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import Bottom from './Bottom'

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            temperature: ''
        }

        this.$input = React.createRef()
    }

    handleChange = e => {
        this.setState({
            temperature: e.target.value
        })
    }

    handleChildChange = data => {
        this.setState({
            temperature: data
        })
    }

    componentDidMount() {
        this.$input.current.focus()
        console.log(this.$input)
    }

    render() {
        return (
            <div>
                <p>请输入一个摄氏度</p>
                <input
                    ref={this.$input}
                    value={this.state.temperature}
                    onChange={this.handleChange.bind(this)}
                />
                <BoilingVerdict
                    child={<Bottom />}
                    celsius={this.state.temperature}
                    onTemplateChange={this.handleChildChange}
                />
            </div>
        )
    }
}

export default Calculator

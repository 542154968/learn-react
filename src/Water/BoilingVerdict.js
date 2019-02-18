import React, { Component } from 'react'

class BoilingVerdict extends Component {
    // constructor(props) {
    //     super(props)
    // }
    handleClick = e => {
        this.props.onTemplateChange(0)
    }
    render() {
        return (
            <div>
                <p onClick={this.handleClick.bind(this)}>
                    {this.props.celsius >= 100 ? '水会烧开' : '水不会烧开'}{' '}
                </p>
                {this.props.child}
            </div>
        )
    }
}

export default BoilingVerdict

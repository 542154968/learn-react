import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child extends Component {
    render() {
        return <h2>Hello, {this.props.name}!</h2>
    }
}
Child.propTypes = {
    name: PropTypes.string
}
export default Child

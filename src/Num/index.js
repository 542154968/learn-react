import React, { Component } from 'react'
import { addNum, minusNum } from '../action.js'
import { connect } from 'react-redux'
const mapStateToProps = state => {
    return state
}

class Num extends Component {
    handleClick() {
        this.props.dispatch(addNum())
    }
    handleClickMinus() {
        this.props.dispatch(minusNum())
    }
    componentDidUpdate() {
        console.log(this)
    }
    render() {
        return (
            <div>
                <h4>{this.props.num}</h4>
                <button onClick={this.handleClick.bind(this)}>add</button>
                <button onClick={this.handleClickMinus.bind(this)}>
                    minus
                </button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Num)

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Head extends Component {
    // constructor(props){
    //     super(props)
    // }

    handleClick = event => {
        console.log(event)
    }

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/time">Time</NavLink>
                    </li>
                    <li>
                        <NavLink to="/list/666">List</NavLink>
                    </li>
                    <li>
                        <a href="http://www.baidu.com" target="blank">
                            outer
                        </a>
                    </li>
                    <li>
                        <button onClick={this.handleClick.bind(this)}>
                            跳转测试
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Head

import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return state
}

class List extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            dataList: [
                {
                    name: '李乾坤',
                    age: 24
                },
                {
                    name: '钱梦云',
                    age: 23
                },
                {
                    name: 'xxx',
                    age: 22
                }
            ]
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (data, e) => {
        console.log(data, e)
    }

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <h2>组件内的state</h2>
                <ul>
                    {this.state.dataList.map(v => (
                        <li
                            key={v.age}
                            onClick={this.handleClick.bind(this, v)}
                        >
                            {v.name},{v.age}
                        </li>
                    ))}
                </ul>
                <h2>通过redux传来的</h2>
                <ul>
                    {this.props.todos &&
                        this.props.todos.map(v => <li key={v.id}>{v.text}</li>)}
                </ul>
            </div>
        )
    }
}

List = connect(mapStateToProps)(List)

export default List

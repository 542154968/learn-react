import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
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
        console.log(this.props)
    }

    render() {
        return (
            <ul>
                {this.state.dataList.map(v => (
                    <li key={v.age} onClick={this.handleClick.bind(this, v)}>
                        {v.name},{v.age}
                    </li>
                ))}
            </ul>
        )
    }
}

export default List

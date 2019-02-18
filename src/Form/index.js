import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            mobileNum: ''
        }
    }

    hanldeSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    hanldeChange = (data, e) => {
        this.setState({
            [data]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <p>
                    <label>
                        姓名
                        <input
                            placeholder="请输入您的姓名"
                            name="name"
                            value={this.state.name}
                            onChange={this.hanldeChange.bind(this, 'name')}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        年龄
                        <input
                            placeholder="请输入您的年龄"
                            name="age"
                            value={this.state.age}
                            onChange={this.hanldeChange.bind(this, 'age')}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        手机号码
                        <input
                            placeholder="请输入您的手机号"
                            name="mobileNum"
                            value={this.state.mobileNum}
                            onChange={this.hanldeChange.bind(this, 'mobileNum')}
                        />
                    </label>
                </p>
                <p>
                    <button
                        type="submit"
                        onClick={this.hanldeSubmit.bind(this)}
                    >
                        提交
                    </button>
                </p>
            </form>
        )
    }
}

export default Form

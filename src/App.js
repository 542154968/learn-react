import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Header from './Head/'
import Page from './Page/'
import Time from './Time/'
import List from './List/'
import Hoc from './Hoc/'
import reducer from './reducers/todos'
// import Change from './Change/'
// import Form from './Form/'
// import Water from './Water/'
// import logo from './logo.svg'
// import './App.css'
const store = createStore(reducer) //创建store
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router activeClassName="active">
                    <div>
                        <Header />
                        <Switch>
                            <Redirect
                                from="profile/:userId"
                                to="about/:userId"
                            />
                            <Route path="/" exact component={Page} />
                            <Route path="/time" component={Time} />
                            <Route path="/list/:id" component={List} />
                            <Route path="/hoc" component={Hoc} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App

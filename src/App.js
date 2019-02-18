import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Head/'
import Page from './Page/'
import Time from './Time/'
import List from './List/'
// import Change from './Change/'
// import Form from './Form/'
// import Water from './Water/'
// import logo from './logo.svg'
// import './App.css'

class App extends Component {
    render() {
        return (
            <Router activeClassName="active">
                <div>
                    <Header />
                    <Switch>
                        <Redirect from="profile/:userId" to="about/:userId" />
                        <Route path="/" exact component={Page} />
                        <Route path="/time" component={Time} />
                        <Route path="/list/:id" component={List} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App

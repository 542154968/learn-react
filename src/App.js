import React, { Component } from 'react'
// router
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/todos'
// 组件
import Header from './Head/'
import Page from './Page/'
import Time from './Time/'
import List from './List/'
import Hoc from './Hoc/'
import ErrorPage from './ErrorPage/'
// stylus
import './assets/index.styl'

const store = createStore(reducer) //创建store
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router activeClassName="active">
                    <div>
                        <Header />
                        <Switch>
                            <Route
                                exact
                                path="/login"
                                render={() => <Redirect to={'/time'} />}
                            />
                            <Route path="/" exact component={Page} />
                            <Route path="/time" component={Time} />
                            <Route path="/list/:id" component={List} />
                            <Route path="/hoc" component={Hoc} />
                            <Route component={ErrorPage} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App

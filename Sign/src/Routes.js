import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './component/pages/Home'
import Signup from './component/pages/SignUp'
import Signin from './component/pages/SignIn'
import Detail from './component/pages/Detail'

class Routes extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Switch>
                <Route exact path="/detail">
                    <Detail />
                </Route>
                <Route exact path="/sign-up">
                    <Signup />
                </Route>
                <Route exact path="/sign-in">
                    <Signin />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        )
    }
}

export default Routes

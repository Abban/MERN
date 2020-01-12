import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import FourOhFour from './pages/FourOhFour';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import Register from "./pages/authentication/Register";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/members/login" component={Login}/>
                    <Route path="/members/register" component={Register}/>
                    <Route path="/members/forgot-password" component={ForgotPassword}/>
                    <Route path="/members/reset-password" component={ResetPassword}/>
                    <Route component={FourOhFour}/>
                </Switch>
            </div>
        );
    }
}

export default App;

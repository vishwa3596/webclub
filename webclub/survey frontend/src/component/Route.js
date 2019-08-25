import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Homepage from "./Homepage";
import Result from "./result";
import Poll from "./Poll"
import Login from "./login";
import Signup from "./signup";
import Errors from "./error";

class Router extends Component{
    render() {
        return(
                <div>
                    <BrowserRouter>
                        <Route exact={true} path="/" component={Homepage}/>
                        <Route exact={true} path="/result" component={Result}/>
                        <Route exact={true} path="/poll" component={Poll}/>
                        <Route exact={true} path="/login" component={Login}/>
                        <Route exact={true} path="/signup" component={Signup}/>
                        <Route exact={true} path="/error" component={Errors}/>
                    </BrowserRouter>
                </div>
        )
    }
}

export default Router;
import React, {Component} from "react"
import Route,{Router} from "react-router";
import Home from "./home";
import Errors from "./error";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/error" component={Errors}/>
                </Router>
            </div>
        )
    }
}

export default Navigation;

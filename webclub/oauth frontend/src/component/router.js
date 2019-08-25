import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Google from "./google";
import Github from "./Github";
import Facebook from "./Facebook";
import Home from "./Dashpage";
class Router extends React.Component{
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Route exact={true} to="/" component={Home}/>
                    <Route exact={true} to="/google" component={Google}/>
                    <Route exact={true} to="/facebook" component={Facebook}/>
                    <Route exact={true} to="/github" component={Github}/>
                </BrowserRouter>
            </div>
        )


    }
}
export default Router;
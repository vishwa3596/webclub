import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.css"
class Errors extends Component{
    render() {
        return(
            <div className="error">
                <h2 >error occurred in username or password OR you have  polled once</h2>
                <Link  to="/" style={{textDecoration: 'none' }}>home</Link>
                <br/>
                <h3>Thank-you</h3>
            </div>
        )
    }
}
export default Errors;


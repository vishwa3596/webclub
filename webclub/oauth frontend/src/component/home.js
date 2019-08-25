import React from "react";
import "./style.css"
class Home extends React.Component{
    render() {
        return(
            <div className="heading">
                OAuth
                <br/>
                <p>please run this service in incognito mode of the browser</p>
                <br/>
                <p> some issues might be there in this due to the CORS policy i have tried by best </p>
                <br/>
                <div className="icons">
                <a href="http://127.0.0.1:5000/github">
                    <img className="github"  src={require("./img/github-sign.png")} alt="login with github"/>
                </a>
                <br/>
                <a href="http://127.0.0.1:5000/google">
                    <img className="google"  src={require("./img/search.png")} alt="login with google"/>
                </a>
                <br/>
                <a href="http://127.0.0.1:5000/facebook">
                   <img className="facebook" src={require("./img/facebook.png")} alt=" login with facebook"/>
                </a>
                </div>
            </div>
        )
    }
}

export default Home;
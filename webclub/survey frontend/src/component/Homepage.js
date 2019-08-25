import React from "react";
import{Link} from "react-router-dom";
import axios from "axios"
import "./style.css"
class Homepage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const url = 'http://127.0.0.1:5000/';
        axios.get(url)
            .then(res => console.log("the elements are loaded successfully"))
            .catch(err => console.log("there has been an error in loading the elements"));
    }

    render() {
        return(
            <div>
                <div className="homepage-img">
                    <img src={require("./surveyback.png")} alt=""/>
                </div>
                <div className="contains">
                <div className="heading">
                <h3>Welcome to the survey of the developers</h3>
                </div>
                    <div className="paragraph">
                        <h6>this survey is regarding the tools developers
                            use so come join to see which all stuffs are trending</h6>
                    </div>
                    <div className="btn">
                <Link className="signup" to="/signup" style={{textDecoration: 'none' }}>Signup</Link>
                </div>
                <Link className="login" style={{textDecoration: 'none' }} to="/login">login</Link>
                </div>
            </div>
        )
    }
}
export default Homepage;
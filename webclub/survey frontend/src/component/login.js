import React, {Component} from "react";
import axios from "axios";
import "./style.css"
import {Redirect} from "react-router-dom"
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            redirect: false,
            error: false,
        };
        this.takeSurvey = this.takeSurvey.bind(this);
        this.addname = this.addname.bind(this);
        this.addpassword = this.addpassword.bind(this);
    }
    addname = (e) => {
        const name = e.target.value;
        if(name){
            this.setState({
                name: name,
            })
        }
    };
    addpassword = (e) => {
      const password = e.target.value;
      if(password){
          this.setState({
              password: password
          })
      }
    };
    takeSurvey = (e) => {
        e.preventDefault();
      const url = 'http://127.0.0.1:5000/login';
      console.log(this.state.name, this.state.password);
      if(this.state.name && this.state.password){
          axios.post(url, {
              username: this.state.name,
              password: this.state.password
          })
              .then(res => {
                  console.log("the login data has been recorded ", res);
                  if(res.data.message){
                      console.log(res.data.message);
                      this.setState({
                          redirect: true
                      })
                  }else {
                      console.log("error has happened", res.data.message);
                      this.setState({
                          error: true
                      })
                  }
              })
              .catch(err => console.log("the post method failed ", err));
      }
    };

    render() {
        if(this.state.redirect){
            return(
                <Redirect to ={{
                    pathname: '/poll'
                }}/>
                )
        }
        if(this.state.error){
            return(
                <Redirect to={{
                pathname: '/error'
                }}/>
            )
        }
    else if(this.state.redirect === false && this.state.error === false){
            return (
                <div>
                    <div className="login-img">
                        <img src={require("./surveyback.png")} alt=""/>
                    </div>
                    <div className="container">
                        <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={this.takeSurvey}>
                            <input onChange={this.addname}  placeholder="enter your name"/>
                            <input onChange={this.addpassword}  placeholder="enter your password" type="password"/>
                            <input type="submit" name="Go-To-Survey"/>
                        </form>
                    </div>
                    </div>
                </div>

            );
        }

    }
}

export default Login;
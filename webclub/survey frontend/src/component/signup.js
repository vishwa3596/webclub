import React, {Component} from "react";
import axios from "axios"
import {Redirect} from "react-router-dom"


class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            redirect: false
        };
        this.addname = this.addname.bind(this);
        this.addpassword = this.addpassword.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
    }
    addname = (e) => {
        e.preventDefault();
        const name = e.target.value;
        this.setState({
            name: name,
        })
    };
    addpassword = (e) => {
        e.preventDefault();
        const password = e.target.value;
        console.log(password);
        this.setState({
            password: password
        })
    };
    onsubmit =(e) => {
        e.preventDefault();
      const url = 'http://127.0.0.1:5000/signup';
      console.log(this.state.name, this.state.password);
      if(this.state.name && this.state.password){
          axios.post(url, {
              username: this.state.name,
              password: this.state.password,
          })
              .then(res => {
                  console.log("the posting of the data is done");
                  if(res.data.message){
                      this.setState({
                          redirect: true
                      })
                  }
              })
              .catch(err => console.log("there is some error in posting the data in the database"));
      }

    };

    render() {
        if(this.state.redirect){
            return(
                <Redirect to={{
                    pathname: '/login'
                }}/>
            )
        }
        return (
            <div>
                <div className="login-img">
                    <img src={require("./surveyback.png")} alt=""/>
                </div>
            <div className="container">
                <div className="signup-form">
                <h2>sign-up</h2>
                <form onSubmit={this.onsubmit}>
                    <input onChange={this.addname} type="text" placeholder="enter the username"/>
                    <input onChange={this.addpassword} type="password" placeholder="enter the password"/>
                    <input type="submit" value="submit" name=""/>
                </form>
                </div>
            </div>
            </div>
        );
    }
}
export default Signup;

















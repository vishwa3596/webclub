import React, {Component} from "react";
import axios from "axios"
import "./style.css"
import {Redirect} from "react-router-dom"
class Poll extends Component{
    constructor(props){
        super(props);
        this.state = {
            language:[],
            frameworks: [],
            ide: [],
            os: [],
            name: '',
            language_selected:'',
            framework_selected: '',
            ide_selected: '',
            os_selected: '',
            redirect: false,
        };
        this.addlanguage = this.addlanguage.bind(this);
        this.addPoll = this.addPoll.bind(this);
        this.addFramework = this.addFramework.bind(this);
        this.addIde = this.addIde.bind(this);
        this.addOs = this.addOs.bind(this);
        this.addName = this.addName.bind(this);
    }
    componentDidMount() {
        const url = 'http://127.0.0.1:5000/language';
        const ide_url = 'http://127.0.0.1:5000/ide';
        const os_url = 'http://127.0.0.1:5000/os';
        axios.get(url)
            .then(res => {
                console.log("the language is ", res.data);
                this.setState(() => ({
                    language: res.data
                }))
            })
            .catch(err => console.log("error is ", err));
        axios.get(ide_url)
            .then(res => {
                console.log("the ide value is ", res.data);
                this.setState(() => ({
                    ide: res.data
                }))
            })
            .catch(err => console.log("error in ide is ",err));
        axios.get(os_url)
            .then(res => {
                console.log("the value of the os is", res.data);
                this.setState(() => ({
                    os: res.data
                }))
            })
            .catch(err => console.log("error in os is ", err))
    }
    addlanguage = (e) => {
        const url = 'http://127.0.0.1:5000/language';
        const language = e.target.value;
        axios.post(url, {
            language_name: language
        })
            .then(res => {
                console.log("the language code is ", res.data);
                this.setState(() => ({
                    frameworks: res.data,
                    language_selected: language
                }))
            })
            .catch(err => console.log("error has been occured", err));
        console.log(e.target.value);
    };
    addFramework = (e) => {
        console.log(e.target.value);
        const framework = e.target.value;
        this.setState(() => ({
            framework_selected: framework
        }));
        e.target.value = '';
    };
    addIde = (e) => {
        console.log(e.target.value);
        const ide = e.target.value;
        this.setState(() => ({
            ide_selected: ide
        }))
    };
    addOs = (e) => {
        const os = e.target.value;
      this.setState(() => ({
          os_selected: os
      }))
    };
    addName = (e) => {
      const name = e.target.value;
      if(name){
          this.setState(() => ({
              name: name
          }))
      }
    };
    addPoll = async (e) =>{
        // objective is to add the user information into the database.
        e.preventDefault();
        console.log(this.state.name);
        const user_url = 'http://127.0.0.1:5000/user';
        axios.post(user_url, {
            name: this.state.name,
            language: this.state.language_selected,
            framework: this.state.framework_selected,
            ide: this.state.ide_selected,
            os: this.state.os_selected
        })
            .then(res => {
                console.log("the user has been stored", res);
                this.setState(() => ({
                    redirect: true
                }))
            })
            .catch(err => console.log("error is ", err));
        console.log("the value of the redirect is ", this.state.redirect);
    };
    render(){
        console.log(this.state.language.length);
        if(this.state.language.length > 0){
            console.log(this.state.language.length);
            return(
                <div>
                    <div className="poll-img">
                        <img src={require("./surveyback.png")} alt=""/>

                    </div>
                    <div className="content">
                        <h3>Enter you choices</h3>
                        <br/>
                        <div className="poll">
                    <form onSubmit={this.addPoll}>
                        <input onChange={this.addName} placeholder="enter the name"/>
                        <br/>

                    <select autoFocus="true" onChange={this.addlanguage}>
                        <option value="">Enter the language you prefer</option>
                    {this.state.language.map((e) => {
                        return(
                                    <option value={e.language_name}>{e.language_name}</option>
                        )
                    })}
                    </select>
                        <br/>
                        <select onChange={this.addFramework}>
                            <option value="">Enter the framework</option>
                            {
                                this.state.frameworks.map((e) => {
                                    return(
                                        <option value={e.framework_name}>{e.framework_name}</option>
                                    )
                                })
                            }
                        </select>
                        <br/>
                        <select onChange={this.addIde}>
                            <option value="">Enter Your fav ide</option>
                            {this.state.ide.map((e) => {
                                return(
                                    <option value={e.ide}>{e.ide}</option>
                                )
                            })}
                        </select>
                        <br/>
                        <select onChange={this.addOs}>
                            <option  value="">Enter your fav os </option>
                            {this.state.os.map((e) => {
                                return(
                                    <option value={e.os}>{e.os}</option>
                                )
                            })}
                        </select>
                        <br/>
                        <input type="submit" value="submit"/>
                    </form>
                    {this.state.redirect && <div> <Redirect to={{pathname: "/result"}}/></div>}
                </div>
                    </div>
                </div>
            )
        }

        return (
            <div></div>
        )
    }
}
export default Poll;
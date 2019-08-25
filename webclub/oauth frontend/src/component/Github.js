import React, {Component} from "react"
import axios from "axios";


class Github extends Component{
    constructor(props){
        super(props);
        this.getGithub = this.getGithub.bind(this);
    }
    getGithub = async (e)=> {
        e.preventDefault();
      const url = 'http://127.0.0.1:5000/github';
      const proxy='https://cors-anywhere.herokuapp.com';
      const proxyurl = `http://127.0.0.1:5000/github`;

      axios.get(proxyurl)
          .then(res => console.log("in github", res))
          .catch(err => console.log("error in github ", err))
    };

    render() {
        return(
            <div>
                <button onClick={this.getGithub}>github</button>
            </div>
        )
    }
}
export default Github
import React, {Component} from "react"
import axios from "axios"
class Facebook extends Component{
    constructor(props){
        super(props);
        this.addFacebook = this.addFacebook.bind(this);
    }
    addFacebook = (e) => {
        e.preventDefault();
      const url = 'http://127.0.0.1:5000/facebook';
      axios.get(url)
          .then(res => console.log("in face book the response is ",res))
          .catch(err => console.log("in facebook the error is ", err))

    };

    render() {
        return(
            <div>
                <button onClick={this.addFacebook}>Facebook</button>
            </div>
        )
    }
}
export default Facebook;
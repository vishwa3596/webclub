import React, {Component} from "react"
class Google extends Component{
    constructor(props){
        super(props);
        this.state = {

        };


    }
    // googleaccn = (e) => {
    //     e.preventDefault();
    //    const url = 'http://127.0.0.1:5000/google';
    //    axios.get(url)
    //        .then(res => console.log("in google accn", res))
    //        .catch(err => console.log("error in google accn ", err));
    // };

    render() {
        return(
            <div>
                <a href="http://127.0.0.1:5000/google">google</a>
            </div>
        )
    }
}
export default Google




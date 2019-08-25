import React, {Component} from "react"

class Errors extends Component{
    constructor(props){
        super(props);
        this.goHome = this.goHome.bind(this);
    }

    goHome =(e) => {
        e.preventDefault();
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Enter Valid Id</h1>
                <div>
                    <button onClick={this.goHome}>Home</button>
                </div>
            </div>
        )
    }
}
export default Errors;
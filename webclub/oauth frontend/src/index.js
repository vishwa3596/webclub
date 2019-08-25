import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from "./component/home";
class Jsx extends Component{
    render() {
        return(
            <div>
                <Home/>
            </div>
        )
    }
}
ReactDOM.render(<Jsx />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

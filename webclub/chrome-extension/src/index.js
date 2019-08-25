import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./component/home"
import Fetch from "./component/fetch"
import * as serviceWorker from './serviceWorker';
const Jsx = () => {
    return (
        <div>
            <Home/>
            <Fetch/>
        </div>
    )
};

ReactDOM.render(<Jsx/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

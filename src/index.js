import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/index.css';
import './homeAssets/home.css'


import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker';

d

const view=(
    <Router>
        <div>
            <Routes/>
        </div>
    </Router>
)

ReactDOM.render(view,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

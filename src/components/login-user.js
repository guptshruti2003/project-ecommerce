import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navb from './Navbar'
import AppContext from '../AppContext'
import Sidebar from './sidebar';
import { Form, Alert, Button, Nav } from 'react-bootstrap';
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Login from './login'



export default class LoginUser extends Component{
 
     constructor(props){
         super(props)
         this.state={
                user:[]
         }
     }

    logout = () => {
        localStorage.clear();
        this.props.history.push('/login');
    }


render(){
    return(
<div>
<Navb {...this.props}/>

<section className="first-section " style={{marginTop:'110px'}}>
       <div className="container "  >
            <div className="row">
              <div className="col-sm-4">
<Sidebar/>
              </div>
              <div className="col-sm-8">
                   <div  className="content">

                  </div>
              </div>
            </div>
        </div>
  </section>




 <Footer/>
</div>

    )
    }
}

LoginUser.contextType=AppContext
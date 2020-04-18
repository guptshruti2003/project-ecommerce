import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navb from './Navbar'
import AppContext from '../AppContext'
import Sidebar from './sidebar';
import { Form, Alert, Button } from 'react-bootstrap';
import Footer from './Footer'
import {Link} from 'react-router-dom'
import axios from 'axios'



export default class Login extends Component{
 
    constructor(){
        super()
        this.state={
       email:"",
       password:"",
       hasError:false,
       status:''
        }
      }
      handleEmail = event => {
        this.setState({ email: event.target.value });
    }
    
    handlePassword = event => {
        this.setState({ password: event.target.value });
    }
    
     handleSubmit = async event => {
      
        event.preventDefault();
     try{     
      const response =  await axios.post(`http://localhost:4000/users`,this.state.email)
      console.log(`user`,response)
          localStorage.setItem("user", this.state.email);
                
                this.props.history.push('/');

     }
     catch(err){
              console.log(`error`)
                this.setState({ hasError: true })
            }
         
    
    }
    

    logout = () => {
        localStorage.clear();
        this.props.history.push('/');
    }


render(){
    return(
<div>
<Navb {...this.props}/>

<section className="first-section " style={{marginTop:'180px'}}>
       <div className="container "  >
            <div className="row">
              <div className="col-sm-4">
<Sidebar/>
              </div>
              <div className="col-sm-8">
                   <div  className="content p-2"><br/><br/>
                      <h5>LOGIN FORM </h5>
                      <Form onSubmit={this.handleSubmit}>
<Form.Label>Email</Form.Label>
<Form.Control
    type="text"
    value={this.state.email}
    onChange={this.handleEmail}
/>
<br />
<Form.Label>Password</Form.Label>
<Form.Control
    type="password"
    value={this.state.password}
    onChange={this.handlePassword}
/>
<br />
<Button type="submit" variant="outline-primary">Login</Button>

</Form>
{this.state.hasError ? 
<Alert variant="danger" onClick={() => this.setState({ hasError: false })}>Login failed</Alert> : ""}
<br />
<Link to="/register" className="link">Register  as new user</Link>
<br/><br/>
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

Login.contextType=AppContext
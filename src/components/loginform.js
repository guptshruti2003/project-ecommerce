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
  // if(response.status==200){
      localStorage.setItem("user", this.state.email);
            
            this.props.history.push('/login-user');
            console.log(`res1`,response);
  // }
 }
 catch(err){
          console.log(`error`)
            this.setState({ hasError: true })
        }
     

}

  


render(){
    return(
<div>
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
<Link to="/register">Register  as new user</Link>
</div>

    )
    }
}

Login.contextType=AppContext
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from 'components/logo.png';
import './index.css';
import{Nav,Navbar,NavDropdown}from 'react-bootstrap';
import AppContext from '../AppContext'
import {Link} from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap';
import axios from 'axios'

export default class Navb extends Component{
 
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

    localStorage.setItem("user",this.state.email);
    this.setState({ email:"",password:""})
          this.props.history.push('/');
          console.log(`res1`,response);
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
<div className="container-fluid">
<Navbar  bg="light" expand="lg" className="fixed-top">
<Link to="/" ><div><img className="w-50 logo" src={Logo} /></div></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <div className="row">
        <div className="col-xs-4">
        <div className="d-inline-flex">
          <Link to="/" className="text-wrap lineh">Home</Link>
          <div className="icon-wrap icont"> <i className="header-icon topup fas fa-user"  style={{marginTop:'5px'}}/></div>
          <NavDropdown className="text-wrap " title="Sign in" id="basic-nav-dropdown" >

<Form onSubmit={this.handleSubmit} className="p-3">
<Form.Label>Email</Form.Label>
<Form.Control  className="input-sm"
    type="email"
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
  <Alert variant="danger" onClick={() => this.setState({ hasError: false })}>Login failed</Alert> :""}
<br />
<Link to="/register">Register  as new user</Link>
</NavDropdown>
        </div>
        </div>
<div className="col-xs-4">
<Link to="/Cart" className="header-text">
<div className="d-inline-flex">
      
        <div className="icon-wrap"><i className="header-icon fas fa-shopping-cart" /></div>
        
<div className="text-wrap">
<span className="small round badge badge-secondary">{this.context.cart.length}</span>
  Cart</div>
  </div>
  </Link>
</div>
<div className="col-xs-4">
<Link to="/Cart" className="header-text">
<div className="d-inline-flex">
      
        <div className="icon-wrap"><i className="header-icon fas fa-shopping-cart" /></div>
        
<div className="text-wrap">
<span className="small round badge badge-secondary">1</span>
  wishlist
</div>
  </div>
  </Link>


</div>

</div>
    </Nav>
   {!this.state.hasError ? 
  <div className="row  shiftright" style={{marginTop:'0',}} >
  <div className="col-sm-6 ">Welcome<h6> {localStorage.getItem("user")},</h6>
  <div style={{float:'right'}}><small>You have {this.context.cart.length} items in your cart </small><br/><Link to="/cart"><small>View Cart</small></Link>
  </div>
  <div className="col-sm-6 cur " style={{float:'right'}} ><small onClick={this.logout}>Logout </small></div></div>
</div>:""} 
  </Navbar.Collapse>



</Navbar>




</div>

    )
    }
}

Navb.contextType=AppContext
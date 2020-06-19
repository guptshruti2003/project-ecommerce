import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from 'components/logo.png';
import './index.css';
import AppContext from '../AppContext'
import {Link} from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap';
import Navb from './Navbar'
import Sidebar from './sidebar';
import{Nav,Navbar,NavDropdown}from 'react-bootstrap';

import Footer from './Footer';
import axios from 'axios'



export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            repassword: "",
            hasError: false,
            hasErrors: false,

            user:[],
        }
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleRePassword = event => {
        this.setState({ repassword: event.target.value })
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.password !== this.state.repassword) {
          this.setState({ hasErrors: true, errorMessage: "Passwords don't match"});
          return;
      }
        const user = {
          email: this.state.email,
          password:this.state.password,
          repassword:this.state.repassword
        }
        
        try{     
          const response =  await axios.post('http://localhost:4000/registeredusers', { user })

          console.log(`user`,response) 
          
              this.setState({ email:"",password:"",repassword:""})
                    this.props.history.push('/login');
                    console.log(`res1`,response);
          }
          catch(err){
                  console.log(`error`)
                    this.setState({ hasErrors: true })
                }
             
          
          }
        goBack=()=>{
            this.props.history.push("/login")
        }

render(){
    return(
        <div>
        <Navbar  bg="light" expand="lg" className="fixed-top">
        <Link to="/"><div><img className="w-50 logo" src={Logo} /></div></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="row">
                <div className="col-xs-4">
                <div className="d-inline-flex">
                  <Link to="/" className="text-wrap">Home</Link>
                  <div className="icon-wrap icont"><i className="header-icon topup  fas fa-user" /></div>
                  <NavDropdown className="text-wrap" title="Sign in" id="basic-nav-dropdown" >
                     
        <Form onSubmit={this.handleSubmit} className="p-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
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
        <Form.Label className="lh-2">Retype Password</Form.Label>
        <Form.Control
            type="password"
            value={this.state.repassword}
            onChange={this.handleRePassword}
        />
        <br/>
        <Button type="submit" variant="outline-primary">Register New user</Button>
        
        </Form>
        {this.state.hasErrors ? 
                    <Alert variant="danger" onClick={() => this.setState({ hasError: false })}>{this.state.errorMessage}</Alert> : ""}
        <br />
 <button type="submit" variant="warning"  style={{fontSize:'14px'}} onClick={this.goBack} >go back to login</button>
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
        <section className="first-section  " >
       <div className="container "  >
            <div className="row">
              <div className="col-sm-4">
<Sidebar/>
              </div>
              <div className="col-sm-8">
                   <div  className="content" style={{width:'95%',padding:'5px'}}><br/>
                      <h4 href="#a">REGISTRATION FORM </h4>
                      {this.state.hasErrors ? 
                    <Alert variant="danger" onClick={() => this.setState({ hasError: false })}>{this.state.errorMessage}</Alert> : ""}
                      <Form  onSubmit={this.handleSubmit}>
        <Form.Label>Email</Form.Label>
        <Form.Control 
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
        <Form.Label>Retype Password</Form.Label>
        <Form.Control
            type="password"
            value={this.state.repassword}
            onChange={this.handleRePassword}
        />
         <div className="mbottom"></div>

        <Button type="submit" variant="outline-primary">Register New user</Button>
        
        </Form>
      
        <div className="container">



</div>

 <button type="submit" variant="outline-primary" className="link ml-2" onClick={this.goBack} >go back to login</button>

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

Register.contextType=AppContext
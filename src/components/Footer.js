import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.css'


export default class Footer extends Component{
  

render(){

  return (
    <div >
<footer className=" page-footer  bg-secondary fontsm ">
<div className="container pt-2">

    <div className="text-white ">
        <div className="row">
            <div className="col-sm-4 col-md-4 ">
                <div className="">
                    <h5 style={{fontSize:'15px'}}>Quick links</h5>
                    <ul className="list-unstyled ">
                        <li >
                            <Link className="text-white " style={{fontSize:'12px'}} to="/cart">My cart</Link>

                        </li>
                        <li>
                            <Link  className="text-white"  style={{fontSize:'12px'}} to="/wishlist">Wishlist</Link>
                            
                        </li>
                    </ul>
                </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="">
                        <h5 style={{fontSize:'15px'}}>Contact us</h5>
                        <p style={{fontSize:'12px'}}>
                            <strong>Phone:</strong>+1234567<br/>
                            <strong>Fax:</strong>+1234567<br/>

                        </p>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <h5 style={{fontSize:'15px'}}>Social links</h5>
                    <div className="">
                        <Link className="text-white mr-3"  to="https://facebook.com/cutestores">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="text-white mr-3" to="https://twitter.com/cutestores">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="text-white mr-3" to="https://youtube.com/cutestores">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link  className="text-white mr-3" to="https://instagram.com/cutestores">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                  
                </div>

            
            </div>

        </div>
        </div>
<div className="row ml-1 mt-1" style={{fontSize:'12px'}}>
    <div className="col-sm-12">
        <p className="text-white">
        <i className="far fa-copyright"></i>&nbsp; Copyright All rights reserved &nbsp;
        </p>               

    </div>
    </div>
</footer>

    </div>
  )

}
}

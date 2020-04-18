import React from 'react';
import {Link} from 'react-router-dom'
import '../homeAssets/home.css'

export default class Sidebar extends React.Component{
    render(){
        return(
<div className="">
    <div className="card leftbar" >
        <h5 className="line-h2">My Categories</h5>
        <ul className="list-unstyled p-0 m-0">
            <li>
                <Link to="/science-toys">
                 <div className="d-inline-flex">
                      <div className="header-icon icon-wrap"> 
                          <i className=" fas fa-vial"></i>
                      
                      <div className="text-wrap">
                          <div className="text-s">Science Toys</div>
                      </div>
                      
                      </div>
                 </div>
                </Link>
            </li>
            <li>
                <Link to="/pretend-toys">
                 <div className="d-inline-flex">
                      <div className="header-icon icon-wrap"> 
                      <i className="fas fa-truck-loading"></i>                      
                      <div className="text-wrap">
                          <div className="text-s">Pretend Toys</div>
                      </div>
                      
                      </div>
                 </div>
                </Link>
            </li>
            <li>
                <Link to="/musical-toys">
                 <div className="d-inline-flex"> 
                      <div className="header-icon icon-wrap"> 
                      <i className="fas fa-music"></i>
                     <div className="text-wrap">
                          <div className="text-s">Musical Toys</div>
                      </div>
                      
                      </div>
                 </div>
                </Link>
            </li>
            <li>
            <Link to="/building-toys">
                 <div className="d-inline-flex"> 
                      <div className="header-icon icon-wrap"> 
                      <i className="fas fa-building"></i>         
                        <div className="text-wrap">
                          <div className="text-s">Building Toys</div>
                      </div>
                      
                      </div>
                 </div>
                </Link>
            </li>
            <li>
                <Link to="/electronic-toys">
                 <div className="d-inline-flex">
                      <div className="header-icon icon-wrap"> 
                      <i className="fas fa-tv"></i>
                       <div className="text-wrap">
                          <div className="text-s">Electronic Toys</div>
                      </div>
                      
                      </div>
                 </div>
                </Link>
            </li>
        </ul>
    </div>
</div>        )
    }
}
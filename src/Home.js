import React, { Component } from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import Navb from './components/Navbar';
import {Link} from 'react-router-dom'
import Footer from 'components/Footer'
import './homeAssets/home.css'
import slide1 from './homeAssets/slide1.jpg'
import slide2 from './homeAssets/slide2.jpg'
import Sidebar from './components/sidebar'
import paymentIcon from './homeAssets/payment.png'
import returnIcon from './homeAssets/return.jpg'
import trustIcon from './homeAssets/trust.png'
import AppContext from './AppContext'
import HomeItem from './homeItem'
import {getProducts} from './repo'




export default class Home extends Component{

constructor(props){
  super(props);
  this.state={
    hasError:false,
}
}

render(){

  return (
    <div className="container-fluid " >
     <Navb {...this.props}/>

     <section className="first-section  " >
       <div className="container-fluid "  >
            <div className="row ">
              <div className="col-sm-5 col-md-4">
<Sidebar/>
              </div>
              <div className="col-sm-7 col-md-8 margint">
                   <div  className="content">
                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 newwidth img-responsive"
                              src={slide1}
                              alt="First slide"
                            />
                            <Carousel.Caption>
                              <h3 className="textc">The Human Body Science Kit</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 newwidth1 img-responsive"
                              src={slide2}
                              alt="second slide"
                            />

                            <Carousel.Caption>
                              <h3 className="textc">The Human Body Science Kit</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                          </Carousel.Item>


                          
                        </Carousel>
                  </div>
              </div>
            </div>
        </div>
  </section>
  <section className="second-section  bg-white">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 icon-text-s" >
          <div className="text-center">
            <img className="mb-3" src={paymentIcon} alt="paymentIcon " />
            <div className="">
              <h4 className="asl">Easy Payment</h4>
              <p className="small">The payment process is very easy to navigate and you can do it in few clicks away</p>
            </div>
            </div>
        </div>
        <div className="col-sm-4 icon-text-s">
        <div className="text-center">
            <img className="mb-3" src={returnIcon} alt="returnIcon " />
            <div className="text-center">
              <h4 className="asl">Easy return</h4>
              <p className="small">The payment process is very easy to navigate and you can do it in few clicks away</p>
            </div>
            </div>
        </div>
        <div className="col-sm-4 icon-text-s">
        <div className="text-center">
            <img className="mb-3" src={trustIcon} alt="trustIcon " />
            <div className="">
              <h4 className="asl">Trusted Quality</h4><br/>
              <p className="small">The products are of trusted quality beacause we have reviews from millions of happy customers</p>
            </div>
            </div>
        </div>

      </div>
      </div>
    </section>
    <section className="third-section">
      <h4 className="p-3 text-uppercase">Popular products</h4>
    <div className="row">
 
   {
     this.context.products.map((product,index)=>
         <HomeItem product={product} key={index}/>
)}

               
  
</div>
       
    </section>
<Footer/>

    </div>
  )

}
}

Home.contextType=AppContext
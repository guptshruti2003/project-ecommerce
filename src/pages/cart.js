import React from 'react'
import AppContext from  '../AppContext'
import CartItem from './cartItem'
import Navb from '../components/Navbar'
import Footer from '../components/Footer';

export default class Cart extends React.Component{
    
    render(){
        let total=0
        this.context.cart.map((item)=>{
            total+=(item.qty_added*item.product.Price)
        })
        return(
            <div>
            <Navb {...this.props}/>

                <div className="container" style={{marginTop:'170px'}}>
                <div className="">

                    <h3 >cart</h3>
                    <hr/>
                        {this.context.cart.map((product,index)=>
                           <CartItem product={product.product} qty={product.qty_added}  key={index} />
                            )
                        }
                            <hr/>
                            <div className="float-right">
                                <h4><small>Total amount:</small><span className="text-primary">${total}</span></h4>
                            </div>
                            
                            <div style={{marginBottom:'60px'}}><div className="col-sm-12 bg-light">
                            <button className="btn btn-danger float-right mr-2" onClick={this.context.clearCart} >clear cart</button>


                            </div></div>

                </div>
            </div>
<Footer/>
            </div>
        )
    }
}
Cart.contextType=AppContext
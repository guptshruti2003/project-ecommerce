import React from 'react'
import AppContext from '../AppContext'

export default class CartItem extends React.Component{
   
   


    // onChangeQty=(e,i)=>
    // { 
    //     console.log('e',e);

       
    //    let {cart}=this.state.cart;
    
    //    console.log('cart',cart);
    //    var q=(cart[i].product.Price*e);
    //    console.log(q);
    //     // console.log(scart[i].product.Price*e)
    //     this.setState({
    //                 cart:cart
    //         })
    //     }
    render(){
        let {product}=this.props;
        return(
<div>

    <div className="card mb-2">
        <div className="card-body">
            <img className="float-left mr-3" alt="" src={product.imageUrl} style={{width:'12%'}} />
            
            <h4 className="card-title">{product.name}</h4>

            <h5 className="card-text"><small>Price:</small>${product.Price}</h5>
            <h5 className="card-text"><small>Quantity left :</small>{product.newQuantity}</h5>

            <span className="card-text"><small>Quantity added:</small>{product.qty}</span> 
            {/* <input type="number" min="1" value={this.state.value} onChange={this.onChangeQty}/> */}
            <h5 className="card-text"><small>total calculated price:</small>{product.totalPrice}</h5>
            {/* <h4 >
<input className="text-center" type="number" min="1" onChange={(e)=>this.onChangeQty(e,product.id)}/>
</h4> */}


            <button className="btn btn-warning btn-small btn-warning float-right" onClick={()=>{this.context.removeFromCart(product.id)}}>Remove from cart</button>
        </div>
    </div>
</div>
        )
    }
}

CartItem.contextType=AppContext
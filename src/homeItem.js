import React from 'react';
import AppContext from './AppContext'

export default class HomeItem extends React.Component{
render()
{
    let {product}=this.props
    return(
           <div className="col-sm-3 ">
               <div className="card padd p-2">
                   <div className="text-center">
                       <img className="img-fluid" src={product.imageUrl} alt="" />
                   </div>
                   <hr/>
                   <h4 className="card-title">{product.name}</h4>
                   <p className="card-text">{product.Description}</p>
                   <h4 className="card-text">Price:<small>${product.Price}</small></h4>
                   <span className="card-text"><small>Available Quantity:</small>{product.available_Quantity}</span>

<div>
    <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(product,1)}}>Add to Cart</button>
</div>
               </div>
          
           </div>
    )
}

}
HomeItem.contextType=AppContext
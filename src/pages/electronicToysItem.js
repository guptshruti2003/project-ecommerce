import React from 'react';
import AppContext from '../AppContext'

export default class ElectronicToysItem extends React.Component{
render()
{
    let {electronictoy}=this.props
    return(
           <div className="col-sm-3 mb-3">
               <div className="card p-1">
                   <div className="text-center">
                       <img className="img-fluid" src={electronictoy.imageUrl} alt="" />
                   </div>
                   <hr/>
                   <h4 className="card-title">{electronictoy.name}</h4>
                   <p className="card-text">{electronictoy.Description}</p>
                   <h4 className="card-text">Price:<small>${electronictoy.Price}</small></h4>
                   <span className="card-text"><small>Available Quantity:</small>{electronictoy.available_Quantity}</span>

<div>
    <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(electronictoy,1)}}>Add to Cart</button>
</div>
               </div>
          
           </div>
    )
}

}
ElectronicToysItem.contextType=AppContext
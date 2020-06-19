import React from 'react';
import AppContext from '../AppContext'

export default class BuildingToysItem extends React.Component{
render()
{
    let {buildingtoy}=this.props
    return(
           <div className="col-sm-3 mb-3">
               <div className="card p-1">
                   <div className="text-center">
                       <img className="img-fluid" src={buildingtoy.imageUrl} alt="" />
                   </div>
                   <hr/>
                   <h4 className="card-title">{buildingtoy.name}</h4>
                   <p className="card-text">{buildingtoy.Description}</p>
                   <h4 className="card-text">Price:<small>${buildingtoy.Price}</small></h4>
                   <span className="card-text"><small>Available Quantity:</small>{buildingtoy.available_Quantity}</span>
<div className="mb-3"></div>

<div>
    <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(buildingtoy,1)}}>Add to Cart</button>
</div>
<div className="mb-3"></div>

               </div>
          
           </div>
    )
}

}
BuildingToysItem.contextType=AppContext
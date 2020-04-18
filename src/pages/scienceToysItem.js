import React from 'react';
import AppContext from '../AppContext'

export default class ScienceToysItem extends React.Component{
render()
{
    let {sciencetoy}=this.props
    return(
           <div className="col-sm-3 mb-3">
               <div className="card p-1">
                   <div className="text-center">
                       <img className="img-fluid" src={sciencetoy.imageUrl} alt="" />
                   </div>
                   <hr/>
                   <h4 className="card-title">{sciencetoy.name}</h4>
                   <p className="card-text">{sciencetoy.Description}</p>
                   <h4 className="card-text">Price:<small>${sciencetoy.Price}</small></h4>
                   <span className="card-text"><small>Available Quantity:</small>{sciencetoy.available_Quantity}</span>

<div>
    <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(sciencetoy,1)}}>Add to Cart</button>
</div>
               </div>
          
           </div>
    )
}

}
ScienceToysItem.contextType=AppContext
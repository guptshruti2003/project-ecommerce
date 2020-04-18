import React from 'react';
import AppContext from '../AppContext'

export default class MusicalToysItem extends React.Component{
render()
{
    let {musicaltoy}=this.props
    return(
           <div className="col-sm-3 mb-3">
               <div className="card p-1">
                   <div className="text-center">
                       <img className="img-fluid" src={musicaltoy.imageUrl} alt="" />
                   </div>
                   <hr/>
                   <h4 className="card-title">{musicaltoy.name}</h4>
                   <p className="card-text">{musicaltoy.Description}</p>
                   <h4 className="card-text">Price:<small>${musicaltoy.Price}</small></h4>
                   <span className="card-text"><small>Available Quantity:</small>{musicaltoy.available_Quantity}</span>

<div>
    <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(musicaltoy,1)}}>Add to Cart</button>
</div>
               </div>
          
           </div>
    )
}

}
MusicalToysItem.contextType=AppContext
import React from 'react';
import AppContext from '../AppContext'

export default class PretendItem extends React.Component{
render()
{
    let {pretendtoy}=this.props
    return(
           <div className="col-sm-3 mb-3">
               <div className="card p-1">
                   <div className="text-center">
                       <img className="img-fluid" src={pretendtoy.imageUrl} alt="" />
                   </div>
                   <hr/>
                   <h4 className="card-title">{pretendtoy.name}</h4>
                   <p className="card-text">{pretendtoy.Description}</p>
                   <h4 className="card-text">Price:<small>${pretendtoy.Price}</small></h4>
                   <span className="card-text"><small>Available Quantity:</small>{pretendtoy.available_Quantity}</span>

<div>
    <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(pretendtoy,1)}}>Add to Cart</button>
</div>
               </div>
          
           </div>
    )
}

}
PretendItem.contextType=AppContext
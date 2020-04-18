import React from 'react'
import Footer from '../components/Footer';
import Navb from '../components/Navbar';
import Sidebar from '../components/sidebar'
import AppContext from '../AppContext'
import BuildingToysItem from './buildingToysItem'

 export default class BuildingToys extends React.Component{
   render(){
      return(
        <div>
 <Navb {...this.props}/>
<section className="Buildingtoys-section "> 
<div className="container-fluid mtop" style={{marginTop:'150px'}}>
<h3 className="card-title"> Building Toys</h3>
<hr/>
    <div className="row ">

        <div className="col-sm-4">
            <Sidebar/>
        </div>
        <div className="col-sm-8 mt-0" >
            <div className="row">
                {
                    this.context.buildingtoys.map((buildingtoy,index)=>

                    <BuildingToysItem  buildingtoy={buildingtoy} key={index}/>)
                }
            </div>
        </div>

    </div>
</div>
</section>
<Footer />

</div>
      )
   } 
}

BuildingToys.contextType=AppContext
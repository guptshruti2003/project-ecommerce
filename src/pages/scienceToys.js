import React from 'react'
import Footer from '../components/Footer';
import Navb from '../components/Navbar';
import Sidebar from '../components/sidebar'
import AppContext from '../AppContext'
import ScienceToysItem from './scienceToysItem'

 export default class ScienceToys extends React.Component{
   render(){
      return(
        <div>
 <Navb {...this.props}/>
<section className="science-section "> 
<div className="container-fluid " style={{marginTop:'170px'}}>
<h3 className="card-title">Science Toys</h3>
<hr/>
    <div className="row ">

        <div className="col-sm-4">
            <Sidebar/><br/>
        </div>
        <div className="col-sm-8">
            <div className="row">
                {
                    this.context.sciencetoys.map((sciencetoy,index)=>

                    <ScienceToysItem  sciencetoy={sciencetoy} key={index}/>)
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

ScienceToys.contextType=AppContext
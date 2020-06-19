import React from 'react'
import Footer from '../components/Footer';
import Navb from '../components/Navbar';
import Sidebar from '../components/sidebar'
import AppContext from '../AppContext'
import ElectronicToysItem from './electronicToysItem'

 export default class ElectronicToys extends React.Component{
   render(){
      return(
        <div>
 <Navb {...this.props}/>
<section className="Electronic-section "> 
<div className="container mtop" >
<h3 >Electronic Toys</h3>
<hr/>
    <div className="row ">

        <div className="col-sm-4">
            <Sidebar/>
        </div>
        <div className="col-sm-8">           

            <div className="row">
                {
                    this.context.electronictoys.map((electronictoy,index)=>
                    <ElectronicToysItem  electronictoy={electronictoy} key={index}/>)
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

ElectronicToys.contextType=AppContext
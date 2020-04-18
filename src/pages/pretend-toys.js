import React from 'react'
import Footer from '../components/Footer';
import Navb from '../components/Navbar';
import Sidebar from '../components/sidebar'
import AppContext from '../AppContext'
import PretendItem from './pretenditem'

 export default class PretendToys extends React.Component{
   render(){
      return(
        <div>
 <Navb {...this.props}/>
<section className="pretend-section "> 
<div className="container-fluid " style={{marginTop:'170px'}}>
<h3 className="card-title">Pretend Toys</h3>
<hr/>
    <div className="row ">

        <div className="col-sm-4">
            <Sidebar/>
        </div>
        <div className="col-sm-8">
            <div className="row">
                {
                    this.context.pretendtoys.map((pretendtoy,index)=>

                    <PretendItem  pretendtoy={pretendtoy} key={index}/>)
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

PretendToys.contextType=AppContext
import React from 'react'
import Footer from '../components/Footer';
import Navb from '../components/Navbar';
import Sidebar from '../components/sidebar'
import AppContext from '../AppContext'
import MusicalToysItem from './musicalToysItem'

 export default class MusicalToys extends React.Component{
   render(){
      return(
        <div>
 <Navb {...this.props}/>
<section className="musical-section "> 
<div className="container mtop" >
<h3 >Musical Toys</h3>
<hr/>
    <div className="row ">

        <div className="col-sm-4">
            <Sidebar/>
        </div>
        <div className="col-sm-8">
            <div className="row">
                {
                    this.context.musicaltoys.map((musicaltoy,index)=>

                    <MusicalToysItem  musicaltoy={musicaltoy} key={index}/>)
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

MusicalToys.contextType=AppContext
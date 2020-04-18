import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home'
import AppContext from './AppContext'
import {getProducts,getPretendToys} from './repo'
import Cart from './pages/cart'
import PretendToys from './pages/pretend-toys'
import ScienceToys from  './pages/scienceToys'
import BuildingToys from  './pages/buildingToys'
import MusicalToys from './pages/musicalToys'
import ElectronicToys from './pages/electronicToys'
import Login from './components/login'
import Register from './components/register'
import Navb from './components/Navbar'
import {getMusicalToys, getBuildingToys,getElectronicToys,getScienceToys} from './repo'
import LoginUser from './components/login-user';


class Routes extends React.Component{

        constructor(props){
            super(props)
            this.state={
               products:[],
               pretendtoys:[],
               sciencetoys:[],
               musicaltoys:[],
               buildingtoys:[],
               electronictoys:[],
               users:[],
               registeredusers:[],
               cart:JSON.parse(localStorage.getItem('cart')) || [],
               addToCart:(product,qty)=>{
                let cart=this.state.cart;
                cart.map((c)=>{
                    if(c.product.id==product.id)
                    {
                         qty++;
                         return qty;
                        
                    }  
                
                }); 
                 cart.push({
                    product:product,
                    qty_added:qty
                    
                });
                
                this.setState({
                    cart:cart
                })
                console.log(cart)  
                console.log('qty in cart ',qty,'productid',product.id)  
                
                localStorage.setItem('cart',JSON.stringify(cart))
                
            },
               removeFromCart:(id)=>{
                   let cart=this.state.cart,newCart=[];

                    cart.map((c)=>{
                        if(c.product.id!==id)
                        newCart.push(c)

                    });
                    this.setState({
                        cart:newCart
                    })
                    localStorage.setItem('cart',JSON.stringify(newCart))
                
                },
                clearCart:()=>{
                    localStorage.clear();
                    this.setState({cart:[]});
                    if({cart:[]}===null){

                    }
                    alert('cart has been cleared successfully')
                },

            }

        }  
        
        componentDidMount(){
            getProducts().then((products)=>{
              this.setState({products
             })
         
            })
            getPretendToys().then((pretendtoys)=>{
                this.setState({pretendtoys
               })
           
              })

              getScienceToys().then((sciencetoys)=>{
                this.setState({sciencetoys
               })
           
              })

              getMusicalToys().then((musicaltoys)=>{
                this.setState({musicaltoys
               })
           
              })

              getElectronicToys().then((electronictoys)=>{
                this.setState({electronictoys
               })
           
              })

              getBuildingToys().then((buildingtoys)=>{
                this.setState({buildingtoys
               })
           
              })
            

          

        }



        render(){
        return(
            <AppContext.Provider value={this.state}>

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Cart" component={Cart} {...this.props}></Route>
                <Route exact path="/pretend-toys" component={PretendToys} {...this.props}></Route>
                <Route exact path="/science-toys" component={ScienceToys}{...this.props}></Route>
                <Route exact path="/musical-toys" component={MusicalToys} {...this.props}></Route>
                <Route exact path="/building-toys" component={BuildingToys} {...this.props}></Route>
                <Route exact path="/electronic-toys" component={ElectronicToys} {...this.props}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/Navbar" component={Navb} {...this.props}></Route>
                <Route exact path="/login-user" component={LoginUser} {...this.props}></Route>

                

            </Switch>
            </AppContext.Provider>
        )
    }
}
export default Routes
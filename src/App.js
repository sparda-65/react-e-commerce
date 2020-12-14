import React,{Component} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninupPage from './Pages/sign-in-up/sign-in-up.component';

import {auth, creatUserProfileDocument} from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{

      if (userAuth){
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data(),
            }
          },()=>console.log(this.state));
        });
        //console.log(this.state);
      }
      else{
        this.setState({currentUser:userAuth});
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SigninupPage}></Route>
        </Switch>
      </div>
    );
  } 
}

export default App;

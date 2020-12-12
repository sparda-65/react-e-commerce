import React,{Component} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninupPage from './Pages/sign-in-up/sign-in-up.component';

import {auth} from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      })
      console.log(user);
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

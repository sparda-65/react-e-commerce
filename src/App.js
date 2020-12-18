import React,{Component} from "react";
import { Switch, Route ,Redirect} from "react-router-dom";
import { connect } from 'react-redux';

import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninupPage from './Pages/sign-in-up/sign-in-up.component';

import {auth, creatUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.action';

import "./App.css";


class App extends Component {
  
  unsubscribeFromAuth=null;

  componentDidMount(){

    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{

      if (userAuth){
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data(),
            });
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>

          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render= { 
            ()=> this.props.currentUser 
            ? (<Redirect to='/'/> ) 
            : (<SigninupPage/>)}
          />  

        </Switch>
      </div>
    );
  } 
}

const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser,
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps )(App);

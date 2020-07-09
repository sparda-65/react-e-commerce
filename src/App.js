import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from './Pages/shop/shop.component'
import Header from './components/header/header.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

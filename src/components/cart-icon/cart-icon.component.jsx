import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toogleCartHiden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = ({ toogleCartHiden, itemCount }) => (
  <div className="cart-icon" onClick={toogleCartHiden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toogleCartHiden: () => dispatch(toogleCartHiden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

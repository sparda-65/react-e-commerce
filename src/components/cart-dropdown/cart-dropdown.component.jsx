import React from "react";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartitem) => (
          <CartItem key={cartitem.id} item={cartitem} />
        ))
      ) : (
        <span className="empty-message">Your cart Item Empty</span>
      )}
    </div>
    <CustomButton>go to checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);

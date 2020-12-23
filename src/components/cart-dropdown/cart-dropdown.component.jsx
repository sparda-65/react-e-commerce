import React from 'react'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartitem =>
                    <CartItem key={cartitem.id} item={cartitem}/>
                )
            }
        </div>
        <CustomButton>go to checkout</CustomButton>
    </div>
)

const mapStateToProps = ({ cart:{cartItems } }) =>({
    cartItems,
})
export default connect(mapStateToProps)(CartDropdown);
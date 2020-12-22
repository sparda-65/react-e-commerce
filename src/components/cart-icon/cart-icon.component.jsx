import React from 'react'
import { ReactComponent as ShoppingBagIcon } from'../../assets/shopping-bag.svg'

import { connect } from 'react-redux';
import { toogleCartHiden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss'

const CartIcon=({toogleCartHiden})=>(
    <div className='cart-icon' onClick={toogleCartHiden}>
        <ShoppingBagIcon className='shopping-icon'/>
        <span className='item-count'>7</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toogleCartHiden:() => dispatch(toogleCartHiden())
}); 

export default connect(null,mapDispatchToProps)(CartIcon);

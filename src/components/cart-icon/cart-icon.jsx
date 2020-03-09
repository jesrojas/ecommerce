import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.scss';


import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
import React from 'react';

import { CustomButton } from '../custom-button/custom-button.jsx';

import './cart-dropdown.scss';

export const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
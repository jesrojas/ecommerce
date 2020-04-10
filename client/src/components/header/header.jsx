import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles.jsx';

import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions.js';
import { changeCartHiddenIfTrueAction } from '../../redux/cart/cart.actions.js';

const Header = ({ currentUser, hidden, signOutStart, changeHiddenIfTrue }) => (
  <HeaderContainer>
    <LogoContainer to="/" onClick={changeHiddenIfTrue}>
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop" onClick={changeHiddenIfTrue}>SHOP</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
      ) : (
          <OptionLink to="/signin" onClick={changeHiddenIfTrue}>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  changeHiddenIfTrue: () => dispatch(changeCartHiddenIfTrueAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
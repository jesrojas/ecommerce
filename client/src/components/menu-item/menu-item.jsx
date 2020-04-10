import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';
import { connect } from 'react-redux';
import { changeCartHiddenIfTrueAction } from '../../redux/cart/cart.actions.js';

const MenuItem = ({title, imageUrl, size, linkUrl, match, history, changeHiddenIfTrue}) => {
    return (
      <div 
      className={`${size} menu-item`} 
      onClick={() => { 
        history.push(`${match.url}${linkUrl}`);
        changeHiddenIfTrue()
      }}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  changeHiddenIfTrue: () => dispatch(changeCartHiddenIfTrueAction())
})

export default withRouter(connect(null, mapDispatchToProps)(MenuItem));
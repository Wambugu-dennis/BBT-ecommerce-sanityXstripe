import React from 'react';
import Link from 'next/link';
import { AiOutlineshopping } from 'react-icons/ai'

import {cart} from './'
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <link href="/">BRAND NAME item-navbar.jsx</link>
      </p>
      <button type="button" 
      className="cart-icon"
      onClick={() => setShowCart(true)}>
        <AiOutlineshopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

    </div>
  )
}

export default Navbar
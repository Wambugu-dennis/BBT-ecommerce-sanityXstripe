import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();

    }, [])
  return (
    <div className="succes-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your shopping with us!</h2>
            <p className="email-msg">Check your inbox for your receipt.</p>
            <p className="description">If you have any questions, please email us on 
                <a className="email" href="mailto:orders@bitsbytech.com">
                    orders@bitsbytech.com
                </a>
            </p>
            <Link href="/">
                <button className="btn" type="button" width="300px">
                    CONTINUE SHOPPING 
                </button>
            </Link>
        </div>        
    </div>
  )
}

export default Success
import React, { useContext } from 'react';

import HeaderCartButtonCss from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
    const context = useContext(CartContext);
    
    console.log(context);
    
    return (
        <>
            <button className={HeaderCartButtonCss.button} onClick={props.onClick}>
                <span className={HeaderCartButtonCss.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={HeaderCartButtonCss.badge}>
                    3
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton;
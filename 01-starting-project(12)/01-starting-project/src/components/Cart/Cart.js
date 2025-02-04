
import { useContext } from 'react';

import cartCss from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item, amount: 1});
    };
  
    const cartItems = (
      <ul className={CartContext['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
 
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={cartCss.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={cartCss.actions}>
            <button className={CartContext['button--alt']} onClick={props.onClose}>
            Close
            </button>
            {hasItems && <button className={CartContext.button}>Order</button>}
        </div>
    </Modal>
  );
};

export default Cart;
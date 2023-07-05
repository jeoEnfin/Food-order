import React from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems =(
   <ul className={classes['cart-item']}>
    {[{ id: 'c1', name:'payasam', amount: 2, price: 15.99}].map((item)=>(
        <li>{item.name}</li>
    ))}
   </ul>
  );

  return (
   <Modal onClose={props.onClose}>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>50.50</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>close</button>
        <button classname={classes.button}>order</button>
    </div>
   </Modal>
  )
}

export default Cart
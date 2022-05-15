import { useContext } from 'react';

import { ShopContext } from '../context';

function Cart() {
  const { order, handleCartShow = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className='cart blue darken-2 white-text' onClick={handleCartShow}>
      <i className='material-icons cart-icon'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}

export { Cart };

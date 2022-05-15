import { useContext } from 'react';

import { ShopContext } from '../context';
import { CartItem } from './CartItem';

function CartList() {
  const { order = [], handleCartShow = Function.prototype } =
    useContext(ShopContext);

  const totalCost = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection cart-list'>
      <li className='collection-item active'>
        Cart
        <i className='material-icons cart-close' onClick={handleCartShow}>
          close
        </i>
      </li>

      {order.length ? (
        order.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <li className='collection-item'>Cart is empty</li>
      )}
      <li className='collection-item active cart-footer'>
        <span className='cart-total-cost'>Total cost: {totalCost} UAH</span>
        <button className='secondary-content btn cart-confirm-btn'>
          Confirm
        </button>
      </li>
    </ul>
  );
}

export { CartList };

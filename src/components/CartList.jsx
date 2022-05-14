import { CartItem } from './CartItem';

function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

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
        order.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeFromCart={removeFromCart}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Cart is empty</li>
      )}
      <li className='collection-item active cart-footer'>
        <span className='cart-total-cost'>Total cost: {totalCost} UAH</span>
        <button className='secondary-content btn cart-checkout-btn'>
          Confirm
        </button>
      </li>
    </ul>
  );
}

export { CartList };

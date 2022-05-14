function CartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item'>
      <div className='cart-item-name'>{name}</div>
      <i
        className='material-icons cart-item-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      {quantity}
      <i
        className='material-icons cart-item-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>{' '}
      Total price: {price * quantity} UAH
      <span className='secondary-content' onClick={() => removeFromCart(id)}>
        <i className='material-icons cart-delete'>clear</i>
      </span>
    </li>
  );
}

export { CartItem };

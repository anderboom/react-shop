import {
  useEffect,
  useState,
} from 'react';

import {
  API_KEY,
  API_URL,
} from '../config';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { Toast } from './Toast';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [toast, setToast] = useState('');

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const addToCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setToast(item.name);
  };
  // eslint-disable-next-line
  const removeFromCart = (itemId) => {
    const newOreder = order.filter((item) => item.id !== itemId);
    setOrder(newOreder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const closeToast = () => {
    setToast('');
  };
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {toast && <Toast name={toast} closeToast={closeToast} />}
    </main>
  );
}

export { Shop };

import {
  createContext,
  useReducer,
} from 'react';

import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  toast: '',
};
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeToast = () => {
    dispatch({ type: 'CLOSE_TOAST' });
  };

  value.handleCartShow = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  value.addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id: itemId } });
  };

  value.removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

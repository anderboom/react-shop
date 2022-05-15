export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        toast: payload.name,
      };
    }

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity + 1;
            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: newQuantity > 0 ? newQuantity : 1,
            };
          } else {
            return item;
          }
        }),
      };

    case 'CLOSE_TOAST':
      return {
        ...state,
        toast: '',
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
}

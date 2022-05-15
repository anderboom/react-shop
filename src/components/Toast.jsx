import {
  useContext,
  useEffect,
} from 'react';

import { ShopContext } from '../context';

function Toast() {
  const { toast: name = '', closeToast = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeToast, 2000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <div id='toast-container'>
      <div className='toast blue lighten white-text'>{name} added to cart</div>
    </div>
  );
}

export { Toast };

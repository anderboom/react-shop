import { useEffect } from 'react';

function Toast(props) {
  const { name = '', closeToast = Function.prototype } = props;
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

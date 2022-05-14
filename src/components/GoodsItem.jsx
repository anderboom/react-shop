function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToCart = Function.prototype,
  } = props;
  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        {id === 'MissingLinkMale_Bundle' ? (
          <img
            src={'https://via.placeholder.com/300.png/09f/fff'}
            alt='Movie'
          />
        ) : (
          <img src={full_background} alt={name} />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title grey-text text-darken-2'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            addToCart({
              id,
              name,
              price,
            })
          }
        >
          Buy
        </button>
        <span className='card-price'>{price} UAH</span>
      </div>
    </div>
  );
}
export { GoodsItem };

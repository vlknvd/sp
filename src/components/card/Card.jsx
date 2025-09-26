import './card.scss';

const Card = ({ img, title, text }) => {
  return (
    <div className='card'>
      <img src={img} alt='' className='card__img' />
      <div className='card__body'>
        <div className='card__header'>
          <h3 className='card__title sp-h3 sp-text-white sp-text-upper'>
            {title}
          </h3>
        </div>
        <div className='card__content'>
          {text.map((el) => {
            return <p className='sp-text-xs'>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

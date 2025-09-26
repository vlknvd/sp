import Card from '../card/Card';
import CardsSlider from '../cardsSlider/CardsSlider';
import './assortment.scss';

const Assortment = () => {
  return (
    <section className='assortment' id='assortment'>
      <div className='assortment__header'>
        <div className='container'>
          <h2 className='assortment__title sp-h2 sp-text-white sp-text-upper'>
            ассортимент
          </h2>
        </div>
      </div>
      <div className='assortment__content'>
        <div className='container'>
          <div className='assortment__content-list'>
            <CardsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assortment;

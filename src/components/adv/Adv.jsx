import './adv.scss';

const Adv = () => {
  return (
    <section className='adv' id='adv'>
      <div className='adv__header'>
        <div className='container'>
          <h2 className='adv__title sp-h2 sp-text-white sp-text-upper'>
            Наши преимущества
          </h2>
        </div>
      </div>
      <div className='adv__content'>
        <div className='container'>
          <ul className='adv__content-list'>
            <li className='adv__content-item'>
              <p className='adv__num sp-text-num'>01</p>
              <p className='adv__text sp-text-md'>
                Доставка на следующий день после заказа
              </p>
            </li>
            <li className='adv__content-item'>
              <p className='adv__num sp-text-num'>02</p>
              <p className='adv__text sp-text-md'>
                Персональный торговый представитель для каждого клиента
              </p>
            </li>
            <li className='adv__content-item'>
              <p className='adv__num sp-text-num'>03</p>
              <p className='adv__text sp-text-md'>
                Минимальное количество ошибок при комплектации и доставке заказа
              </p>
            </li>
            <li className='adv__content-item'>
              <p className='adv__num sp-text-num'>04</p>
              <p className='adv__text sp-text-md'>
                Возможность обмена бракованного товара
              </p>
            </li>
            <li className='adv__content-item'>
              <p className='adv__num sp-text-num'>05</p>
              <p className='adv__text sp-text-md'>
                Предоставление полного комплекта документов с каждой поставкой
              </p>
            </li>
            <li className='adv__content-item'>
              <p className='adv__num sp-text-num'>06</p>
              <p className='adv__text sp-text-md'>
                Оперативное решение вопросов и проблем, возникающих у клиента
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Adv;

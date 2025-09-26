import './about.scss';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__header'>
        <div className='container'>
          <h2 className='about__title sp-h2 sp-text-white sp-text-upper'>
            о нас
          </h2>
        </div>
      </div>
      <div className='about__content'>
        <div className='container'>
          <ul className='about__content-list'>
            <li className='about__content-item'>
              <p className='about__text sp-text-sm'>
                <span className='sp-text-bold-b'>Сервис-продукт</span> - крупный
                дистрибьютор безалкогольных напитков и продуктов питания.
              </p>
            </li>
            <li className='about__content-item'>
              <p className='about__text sp-text-sm'>
                Вот уже <span className='sp-text-bold-b'>более 10 лет</span> мы
                поставляем высококачественные продовольственные товары в
                государственные учреждения, магазины и рестораны Юга России.
              </p>
            </li>
            <li className='about__content-item'>
              <p className='about__text sp-text-sm'>
                Мы стремимся{' '}
                <span className='sp-text-bold-b'>
                  следить за развитием рынка
                </span>{' '}
                продуктов, изучая потребности своих покупателей, и поставлять
                новые продукты, востребованные рынком.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

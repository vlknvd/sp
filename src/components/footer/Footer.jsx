import './footer.scss';

const Footer = () => {
  const address = 'г. Ростов-на-Дону, пер. 5-й Каретный, 13';
  return (
    <footer className='footer' id='contact'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__content-left'>
            <div className='footer__address'>
              <h4 className='footer__title sp-h4 sp-text-white sp-text-bold '>
                Адрес:
              </h4>
              <address>
                <a
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(
                    address
                  )}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__text footer__address--link sp-text-md sp-text-white'
                >
                  {address}
                </a>
              </address>
            </div>
            <div className='footer__work'>
              <h4 className='footer__title sp-h4 sp-text-white sp-text-bold'>
                График работы:
              </h4>
              <p className='sp-text-md sp-text-white'>Пн-Пт: 8:00 - 17:00</p>
            </div>
          </div>
          <div className='footer__content-right'>
            <div className='footer__department'>
              <h4 className='footer__title sp-h4 sp-text-white sp-text-bold'>
                Отдел закупок:
              </h4>
              <address>
                <a
                  href='mailto:ooodasha2008@yandex.ru'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__text sp-text-md sp-text-white'
                >
                  ooodasha2008@yandex.ru
                </a>
              </address>
            </div>
            <div className='footer__department'>
              <h4 className='footer__title sp-h4 sp-text-white sp-text-bold'>
                Отдел продаж:
              </h4>
              <address>
                <a
                  href='tel:+79289673858'
                  className='footer__text sp-text-md sp-text-white'
                >
                  +7 (928) 967-38-58
                </a>
              </address>
            </div>
            <div className='footer__department'>
              <h4 className='footer__title sp-h4 sp-text-white sp-text-bold'>
                Отдел кадров:
              </h4>
              <address>
                <a
                  href='tel:+79289090592'
                  className='footer__text sp-text-md sp-text-white'
                >
                  +7 (928) 909-05-92
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Button from '../button/Button';
import './banner.scss';
import { useEffect, useState } from 'react';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner__content'>
          <h1 className='banner__h1 sp-h1 sp-text-white sp-text-upper'>
            Сервис-продукт
          </h1>
          <h2 className='banner__h2 sp-h2 sp-text-white'>
            Дистрибьютор продуктов питания и безалкогольных напитков
          </h2>
          <Button name={'banner'} />
        </div>
      </div>
    </section>
  );
};

export default Banner;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import Card from '../card/Card';
import { cards } from '../../utils/card';
import './cardsSlider.scss';

const CardsSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1440: { slidesPerView: 3 },
      }}
      loop={true}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <Card title={card.title} text={card.text} img={card.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardsSlider;

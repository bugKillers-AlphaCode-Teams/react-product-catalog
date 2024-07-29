import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Swiper.module.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Order } from './Order Now/Order';

export const Slider: React.FC = () => {
  return (
    <div>
      <section className={`${styles.page__main} ${styles.main}`}>
        <h1 className={styles.main__title}>Welcome to Nice Gadgets store!</h1>
      </section>

      <div className={`main__swiper ${styles.swiper}`}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            type: 'bullets',
            el: '.swiper-pagination',
            clickable: true,
          }}
        >
          <SwiperSlide className={styles.swiper__slide}>
            <Order />
            <a
              className={`${styles.swiper__image} ${styles[`swiper__image--1`]}`}
            ></a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div
              className={`${styles.swiper__wrapper} ${styles['swiper__wrapper--1']} `}
            >
              <a
                className={`${styles.swiper__image} ${styles[`swiper__image--2`]}`}
              ></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div
              className={`${styles.swiper__wrapper} ${styles['swiper__wrapper--2']} `}
            >
              <a
                className={`${styles.swiper__image} ${styles[`swiper__image--3`]}`}
              ></a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="button-arrangment">
          <div className="button-swiper">
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
            <button className="swiper-pagination"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

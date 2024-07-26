import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper/core';
import './Swiper.scss';



import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SimpleSlider = () => {
  return (
    
    <div className="swiper-container">
      <h1 className='header'>Welcome to Nice Gadgets store!</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="src\images\icons\Banner.png" alt="Slide 1" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="src\images\icons\t.PNG" alt="Slide 2" style={{ width: '100%'}} /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/path/to/your/image3.jpg" alt="Slide 3" style={{ width: '100%' }} />
        </SwiperSlide>
      </Swiper>
      {/* Власні кнопки навігації */}
      <div className="swiper-button-prev">
        <img src="src\images\icons\Chevron (Arrow Left).png" alt="Overlay" className="overlay-image" />
      </div>
      <div className="swiper-button-next">
        <img src="src\images\icons\Chevron (Arrow Right).png" alt="Next" />
      </div>
    </div>
  );
}

export default SimpleSlider;

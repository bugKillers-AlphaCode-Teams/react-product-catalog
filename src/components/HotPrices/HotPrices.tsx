import { useRef } from "react";

import sliderRight from "../../images/icons/buttonSlider-right.png";
import sliderLeft from "../../images/icons/buttonSlider-left.png";

import styles from "./HotPrices.module.scss";

import { ProductCard } from "../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/scss/navigation";
import "swiper/scss";

import { ProductItem } from "../../types/ProductItem";

import data from "../../../public/api/products.json";

function preparedHotPricesPhones(data: ProductItem[]) {
  const phones = data.filter(item => item.category === 'phones' && item.name.startsWith('Apple iPhone 11 Pro'));
  const sortedPhones = phones.sort((a, b) => b.price - a.price);

  return sortedPhones.slice(0, 20);
}

const preparedHotPhones = preparedHotPricesPhones(data);

export const HotPrices = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <>
      <section className={styles.hotPrices}>
        <div className={styles.hotPricesBrand}>
          <h2 className={styles.hotPricesBrandTitle}>Hot prices</h2>

          <div className={styles.buttonsSlider}>
            <button
              className={styles.buttonsSliderLeft}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={sliderLeft} alt="left" />
            </button>
            <button
              className={styles.buttonsSliderRight}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={sliderRight} alt="right" />
            </button>
          </div>
        </div>

        <div className={styles.productsList}>
          <Swiper
            className={styles.swiper}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={"auto"}
            spaceBetween={16}
            modules={[Navigation]}
          >
            {preparedHotPhones.map(phone => {
              const { image, name, fullPrice, price, screen, capacity, ram, id } = phone;

              return (
            <SwiperSlide className={styles.swiperSlide} key={id}>
              <ProductCard
                imgSrc={image}
                imgAlt={name}
                title={name}
                price={fullPrice}
                oldPrice={price}
                screen={screen}
                capacity={capacity}
                ram={ram}
              />
            </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

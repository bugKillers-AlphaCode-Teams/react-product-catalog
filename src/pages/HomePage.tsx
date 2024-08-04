import { HotPrices } from "../components/HotPrices";
import { ProductPage } from "../components/ItemCard/ItemCard";
import { NewModels } from "../components/NewModels";
import { ShopByCategory } from "../components/ShopByCategory/ShopByCategory";
import { Slider } from "../components/SwiperMain/Swiper";

export const HomePage = () => {
  return (
    <div>
      <Slider />
      <NewModels />
      <ShopByCategory />
      <HotPrices />
      <ProductPage />
    </div>
  );
};

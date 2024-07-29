import { HotPrices } from "../components/HotPrices";
import { NewModels } from "../components/NewModels";
import { ShopByCategory } from "../components/ShopByCategory/ShopByCategory";
import { Slider } from "../components/Swiper_main/Swiper";

export const HomePage = () => {
  return (
    <div>
      <Slider />
      <NewModels />
      <ShopByCategory />
      <HotPrices />
    </div>
  );
};

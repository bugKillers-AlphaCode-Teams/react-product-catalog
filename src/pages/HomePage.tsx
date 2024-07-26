import { NewModels } from "../components/NewModels";
import { ShopByCategory } from "../components/ShopByCategory/ShopByCategory";
import SimpleSlider from "../components/Swiper_main/Swiper";

export const HomePage = () => {
  return (
    <div>
      <SimpleSlider />
      <NewModels />
      <ShopByCategory />
    </div>
  );
};

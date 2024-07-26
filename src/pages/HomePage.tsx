import { HotPrices } from "../components/HotPrices";
import { NewModels } from "../components/NewModels";
import { ShopByCategory } from "../components/ShopByCategory/ShopByCategory";
export const HomePage = () => {
  return (
    <div>
      <NewModels />
      <ShopByCategory />
      <HotPrices />
    </div>
  );
};

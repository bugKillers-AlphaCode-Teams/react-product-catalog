import "./ShopByCategory.scss";
import { Link } from "react-router-dom";
export const ShopByCategory = () => {
  return (
    <section className="section">
      <h2 className="section__title">Shop by category</h2>

      <div className="category" data-cy="categoryLinksContainer">
        <div className="category__wrapper">
          <Link to="phones">
            <div className="category__photo category__photo--phones">
              <img
                src="\img\Phones for  banner.png"
                alt="phones category"
                className="category__image category__image--phones"
              />
            </div>
          </Link>

          <h3 className="category__title">Mobile phones</h3>
          <p className="category__text">95 models</p>
        </div>

        <div className="category__wrapper">
          <Link to="tablets">
            <div className="category__photo category__photo--tablets">
              <img
                src="\img\IpadPhoto Banner.png"
                alt="tablets category"
                className="category__image category__image--tablets"
              />
            </div>
          </Link>

          <h3 className="category__title">Tablets</h3>
          <p className="category__text">24 models</p>
        </div>

        <div className="category__wrapper">
          <Link to="accessories">
            <div className="category__photo category__photo--accessories">
              <img
                src="\img\Accessories for Iphone  banner.png"
                alt="accessories category"
                className="category__image category__image--accessories"
              />
            </div>
          </Link>

          <h3 className="category__title">Accessories</h3>
          <p className="category__text">100 models</p>
        </div>
      </div>
    </section>
  );
};

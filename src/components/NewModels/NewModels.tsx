import silver from "../../../public/img/phones/apple-iphone-14-pro/silver/apple-iphone-14-pro-128-gb-silver.webp";

export const NewModels = () => {
  return (
    <>
      <section className="newModels">
        <div className="newModels__brand">
          <h2 className="newModels__brand-title">Brand new models</h2>

          <div className="buttonsSlider">
            <button className="buttonsSlider__left">arrow</button>
            <button className="buttonsSlider__right">arrow</button>
          </div>
        </div>

        <div className="productsCards">
          <div className="productCard">
            <img src={silver} alt="" className="productCard__img" />
            <p className="productCard__title">
              Apple iPhone 14 Pro 128GB Silver (MQ023)
            </p>
            <p className="productCard__price">$999</p>
            <p className="productCard__underscore"></p>

            <div className="productCard__specs">
              <div className="productCard__specs-spec">
                <span className="productCard__specs-label">Screen</span>
                <span className="productCard__specs-value">6.1” OLED</span>
              </div>
              <div className="productCard__specs-spec">
                <span className="productCard__specs-label">Capacity`</span>
                <span className="productCard__specs-value">128 GB</span>
              </div>
              <div className="productCard__specs-spec">
                <span className="productCard__specs-label">RAM</span>
                <span className="productCard__specs-value">6 GB</span>
              </div>
            </div>

            <div className="productCard__buttons">
              <button className="productCard__buttons-add">Add to cart</button>
              <img
                className="productCard__buttons-add-to-favorite"
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

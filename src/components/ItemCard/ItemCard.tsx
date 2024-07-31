import React from "react";
import styles from "./ItemCard.module.scss";
import { chevronRight } from "../../images/icons/Chevron (Arrow Right).png";
import { chevronLeft } from "../../images/icons/Chevron (Arrow Left).png";
import { home } from "../../../public/img/House.svg";
import { productImage } from "../../images/icons/iphone14 models.png";
import { galleryImage1 } from "../../images/icons/Slider photo 1.png";
import { galleryImage2 } from "../../images/icons/Slider photo 2.png";
import { galleryImage3 } from "../../images/icons/Slider photo 3.png";
import { galleryImage4 } from "../../images/icons/Slider photo 4.png";
import { galleryImage5 } from "../../images/icons/Slider photo 5.png";

export const ProductPage: React.FC = () => {
  return (
    <div className={styles.productPage}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <img src={home} alt="Home" className={styles.icon} />
        <img src={chevronRight} alt="Arrow" className={styles.icon} />
        <span className={styles.breadcrumbItem}>Phones</span>
        <img src={chevronRight} alt="Arrow" className={styles.icon} />
        <span className={styles.breadcrumbItem}>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</span>
      </div>

      {/* Back Button */}
      <button className={styles.backButton}>
        <img src={chevronLeft} alt="Back" className={styles.icon} />
        <span className={styles.backText}>Back</span>
      </button>

      {/* Product Title */}
      <h1 className={styles.productTitle}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      {/* Product Image */}
      <div className={styles.productImageWrapper}>
        <img src={productImage} alt="Apple iPhone 11 Pro Max" className={styles.productImage} />
      </div>

      {/* Product Gallery */}
      <div className={styles.gallery}>
        <img src={galleryImage3} alt="Gallery 3" className={styles.galleryImage} />
        <img src={galleryImage1} alt="Gallery 1" className={styles.galleryImage} />
        <img src={galleryImage4} alt="Gallery 4" className={styles.galleryImage} />
        <img src={galleryImage2} alt="Gallery 2" className={styles.galleryImage} />
        <img src={galleryImage5} alt="Gallery 5" className={styles.galleryImage} />
      </div>

      {/* Product Elements */}
      <div className={styles.productElements}>
        {/* Здесь могут быть различные элементы, например, цена, кнопки покупки и т.д. */}
      </div>

      {/* Product Details */}
      <div className={styles.productDetails}>
        <div className={styles.section}>
          <h2>About</h2>
        </div>
        <div className={styles.section}>
          <h2>And then there was Pro</h2>
          <p>
            A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Camera</h2>
          <p>
            Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h2>
          <p>
            iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.
          </p>
        </div>
      </div>

      <div className={styles.techInfo}>

      </div>
    </div>
  );
};

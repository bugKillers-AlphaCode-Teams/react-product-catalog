import React from "react";
import styles from "./ItemCard.module.scss";
import ChevronArrowRight from "../../images/icons/Chevron (Arrow Right).png";
import ChevronArrowLeft from "../../images/icons/Chevron (Arrow Left).png";
import home from "../../../public/img/House.svg";
import iphoneMask from "../../images/icons/Photo mask.svg";
import SliderPhoto1 from "../../images/icons/Slider photo 1.svg";
import SliderPhoto2 from "../../images/icons/Slider photo 2.svg";
import SliderPhoto3 from "../../images/icons/Slider photo 3.svg";
import SliderPhoto4 from "../../images/icons/Slider photo 4.svg";
import SliderPhoto5 from "../../images/icons/Slider photo 5.svg";

export const ProductPage: React.FC = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumbs}>
        <img src={home} alt="Home" className={styles.icon} />
        <img src={ChevronArrowRight} alt="Arrow" className={styles.icon} />
        <span className={styles.breadcrumbItem}>Phones</span>
        <img src={ChevronArrowRight} alt="Arrow" className={styles.icon} />
        <span className={styles.breadcrumbItem}>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</span>
      </div>

      <button className={styles.backButton}>
        <img src={ChevronArrowLeft} alt="Back" className={styles.icon} />
        <span className={styles.backText}>Back</span>
      </button>

      <h1 className={styles.productTitle}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={styles.productImageWrapper}>
        <img src={iphoneMask} alt="Apple iPhone 11 Pro Max" className={styles.productImage} />
      </div>

      <div className={styles.gallery}>
        <img src={SliderPhoto3} alt="Gallery 3" className={styles.galleryImage} />
        <img src={SliderPhoto1} alt="Gallery 1" className={styles.galleryImage} />
        <img src={SliderPhoto4} alt="Gallery 4" className={styles.galleryImage} />
        <img src={SliderPhoto2} alt="Gallery 2" className={styles.galleryImage} />
        <img src={SliderPhoto5} alt="Gallery 5" className={styles.galleryImage} />
      </div>

      <div className={styles.productElements}>

      </div>

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

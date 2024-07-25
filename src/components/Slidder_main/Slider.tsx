import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="src\images\icons\Banner.png" alt="Slide 1" />
      </div>
      <div>
        2
      </div>
      <div>
        <img src="/path/to/your/image3.jpg" alt="Slide 3" />
      </div>
    </Slider>
  );
}

export default SimpleSlider;

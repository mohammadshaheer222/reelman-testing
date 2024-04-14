import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "/src/assets/images/carousel/carousel1.jpg";
import image2 from "/src/assets/images/carousel/carousel4.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg";
import HeroContent from "./HeroContent";

const Hero = () => {
  const carousel = [{ images: image1 }, { images: image2 }, { images: image3 }];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {carousel.map((images, index) => (
          <HeroContent key={index} images={images.images} />
        ))}
      </Slider>
    </div>
  );
};
export default Hero;

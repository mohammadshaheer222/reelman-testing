import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from "react-parallax";
import image1 from "/src/assets/images/carousel/carousel1.jpg";
import image2 from "/src/assets/images/carousel/carousel4.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg"

const Hero = () => {
  const carousel = [
    { images:  image1},
    { images:  image2},
    { images:  image3},
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {/* {carousel.map((images, index) => (
            <div key={index}>
              <div className="w-full h-screen md:block">
                <img
                    className="w-full h-full object-cover"
                    src={images.images}
                    alt=""
                  />
              </div>
            </div>
          ))} */}
        {carousel.map((images, index) => (
          <div key={index}>
            <Parallax
              strength={600}
              bgImage={images.images}
              style={{
                minHeight: "100vh",
                height: "auto",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Hero;

import { FaInstagram } from "react-icons/fa6";
import insta1 from "/src/assets/images/carousel/carousel1.jpg";
import wedding2 from "/src/assets/images/work/gal-3.jpg";
import wedding3 from "/src/assets/images/wedding3.jpg";
import wedding4 from "/src/assets/images/wedding4.jpg";
import parallax from "/src/assets/images/paral2.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg";

const Instagram = () => {
  const carousel = [
    { images: parallax },
    { images: wedding4 },
    { images: wedding3 },
    { images: insta1 },
    { images: wedding2 },
    { images: image3 },
  ];

  return (
    <div className="px-6 md:px-48 pb-8">
      <h1 className="heading">Instagram</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 h-full w-full  pt-2 md:max-w-6xl">
          {carousel.map((img) => (
            <div className="p-0.5 relative cursor-pointer group ">
              <img
                className="hover:scale-105 transition-all duration-1000 object-cover w-64 h-36 md:w-96 md:h-96"
                src={img.images}
                alt=""
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

              <div className="scale-0 group-hover:scale-100 duration-500 absolute top-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
                <FaInstagram className=" text-white scale-125 hover:rotate-90 transition-all duration-500 md:w-36" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;

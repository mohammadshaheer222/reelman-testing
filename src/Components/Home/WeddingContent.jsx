import React from "react";
import { Link } from "react-router-dom";

const WeddingContent = ({wedding}) => {
  return (
    <div  className="relative overflow-hidden">
      <img
        className="object-cover object-center h-[28rem] w-full"
        src={wedding.img}
        alt=""
      />
      {/* <p className="heading text-center tracking-tight font-extralight block text-md md:text-lg capitalize">
        {wedding.quote}
          <br />
        <span className="uppercase font-medium">{wedding.bride}</span> and{" "}
        <span className="uppercase font-medium">{wedding.groom}</span>
      </p> */}
      <p className="capitalize font-medium text-2xl py-2 text-gray-500">{wedding.bride} and {wedding.groom}</p>
      <div className="absolute top-0 text-white flex justify-end w-full px-2">
        <Link to="/details" className="cursor-pointer scale-95 hover:scale-100 transition-all duration-300 text-lg">
          [View Project]
        </Link>
      </div>
    </div>
  );
};

export default WeddingContent;

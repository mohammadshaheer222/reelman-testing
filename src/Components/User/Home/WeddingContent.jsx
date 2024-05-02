import React from "react";
import { Link } from "react-router-dom";

const WeddingContent = ({ wedding }) => {
  return (
    <div className="relative">
      <Link to="/details" >
        <div className="overflow-hidden">
          <img
            className="object-cover object-center h-[28rem] w-full hover:scale-105 transition-all duration-700"
            src={wedding.img}
            alt="wedding photo"
          />
        </div>
        {/* <p className="heading text-center tracking-tight font-extralight block text-md md:text-lg capitalize">
        {wedding.quote}
          <br />
        <span className="uppercase font-medium">{wedding.bride}</span> and{" "}
        <span className="uppercase font-medium">{wedding.groom}</span>
      </p> */}
        <p className="capitalize font-medium text-lg py-2 text-gray-500">
          {wedding.bride} and {wedding.groom}
        </p>
      </Link>
    </div>
  );
};

export default WeddingContent;

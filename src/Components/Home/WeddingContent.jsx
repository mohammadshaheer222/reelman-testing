import React from "react";
import { Link } from "react-router-dom";

const WeddingContent = ({ wedding }) => {
  return (
    <div className="relative overflow-hidden scale-100 hover:scale-105 transition-all duration-1000">
      <Link to="/details">
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
        <p className="capitalize font-medium text-2xl py-2 text-gray-500">
          {wedding.bride} and {wedding.groom}
        </p>
      </Link>
    </div>
  );
};

export default WeddingContent;

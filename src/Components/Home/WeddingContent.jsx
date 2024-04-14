import React from "react";

const WeddingContent = ({wedding}) => {
  return (
    <div  className="relative overflow-hidden">
      <img
        className="object-cover object-center h-96 w-full"
        src={wedding.img}
        alt=""
      />
      <p className="heading text-center tracking-tight font-extralight block text-md md:text-lg capitalize">
        {wedding.quote} - <br />
        <span className="uppercase font-medium">{wedding.bride}</span> and{" "}
        <span className="uppercase font-medium">{wedding.groom}</span>
      </p>
      <div className="absolute top-0 text-white flex justify-end w-full   px-2">
        <h5 className="cursor-pointer scale-95 hover:scale-100 transition-all duration-300 text-lg">
          [View Project]
        </h5>
      </div>
    </div>
  );
};

export default WeddingContent;

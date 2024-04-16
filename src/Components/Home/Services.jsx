import Marquee from "react-fast-marquee";

const Services = () => {
  return (
    <div>
      <Marquee speed={20} pauseOnHover={true}>
        <div className="ml-6">
          <div className="flex gap-x-6 text-xl font-bold text-gray-500 cursor-pointer">
            <h3 className="">Wedding</h3>
            <h3>Brand Concept Shoot</h3>
            <h3>Engagement Shoot</h3>
            <h3>NewBorn Portraiture</h3>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Services;

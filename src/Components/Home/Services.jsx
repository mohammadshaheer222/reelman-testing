import Marquee from "react-fast-marquee";

const Services = () => {
  return (
    <div className="md:py-4">
      <Marquee speed={20} pauseOnHover={true}>
        <div className="ml-6">
          <div className="flex gap-x-6 text-xl font-medium cursor-pointer md:text-4xl md:gap-x-12">
            <h3 className="">Wedding</h3>
            <h3>Brand Concept Shoot</h3>
            <h3>Engagement Shoot</h3>
            <h3>Corporate Events</h3>
            <h3>NewBorn Portraiture</h3>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Services;

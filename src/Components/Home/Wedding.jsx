import wedding1 from "/src/assets/images/work/gal-1.jpg";
import wedding2 from "/src/assets/images/work/gal-3.jpg";
import wedding3 from "/src/assets/images/wedding3.jpg";
import wedding4 from "/src/assets/images/wedding4.jpg";

const wedding = [
  {
    img: wedding3,
    quote: "Teo Less Fish In The Sea",
    bride: "Reba",
    groom: "Joemon",
  },
  {
    img: wedding2,
    quote: "Teo Less Fish In The Sea",
    bride: "Reba",
    groom: "Joemon",
  },
  {
    img: wedding4,
    quote: "Teo Less Fish In The Sea",
    bride: "Reba",
    groom: "Joemon",
  },
  {
    img: wedding1,
    quote: "Teo Less Fish In The Sea",
    bride: "Reba",
    groom: "Joemo",
  },
];

const Wedding = () => {
  return (
    <div className="px-8 w-full ">
      <h1 className="heading pb-4">Wedding Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 h-full ">
        {wedding.map((wedding, index) => (
          <div
            key={index}
            className="cursor-pointer scale-95 hover:scale-100 transition-all duration-1000 overflow-hidden"
          >
            <img
              className="object-cover object-center h-96 w-full"
              src={wedding.img}
              alt=""
            />
            <p className="heading text-center tracking-tight font-medium block text-sm md:text-lg">
              {wedding.quote} - <br />
              <span>{wedding.bride}</span> and <span>{wedding.groom}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wedding;

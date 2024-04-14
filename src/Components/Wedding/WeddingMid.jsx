import wedding1 from "/src/assets/images/work/gal-1.jpg";
import wedding2 from "/src/assets/images/work/gal-3.jpg";
import wedding3 from "/src/assets/images/wedding3.jpg";
import wedding4 from "/src/assets/images/wedding4.jpg";
import WeddingContent from "../Home/WeddingContent";

const WeddingMid = () => {
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
  return (
    <div className="px-8 w-full ">
      <h1>lkksfdlss</h1>
      <h1 className="heading pb-4">Wedding Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full gap-4">
        {wedding.map((wedding, index) => (
          <WeddingContent key={index} wedding={wedding} />
        ))}
      </div>
    </div>
  );
};

export default WeddingMid;

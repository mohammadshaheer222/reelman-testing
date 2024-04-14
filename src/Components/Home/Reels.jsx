import { Background, Parallax } from "react-parallax";
import Marquee from "react-fast-marquee";
import video1 from "/src/assets/images/video/video1.gif";
import video2 from "/src/assets/images/video/video2.gif";

const Reels = () => {
  const videos = [
    {
      video: video1,
    },
    {
      video: video2,
    },
    // {
    //   video: "/src/assets/images/video/video1.gif",
    // },
  ];

  return (
    <div className="py-6">
      {videos.map((video, index) => (
        <div key={index} className="relative">
          <Parallax
            className="md:h-[100vh]"
            strength={500}
            style={{
              minHeight: "90vh",
              maxHeight: "100vh",
            }}
          >
            <Background className="custom-bg w-screen">
              <img
                src={video.video}
                alt=""
                className="h-[100vh] md:h-full w-full object-cover object-center"
              />
            </Background>
          </Parallax>

          <div className="absolute top-0 w-full h-full flex justify-center items-end mix-blend-difference overflow-hidden">
            <Marquee
              gradientColor={[255, 255, 255]}
              gradientWidth={30}
              speed={40}
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#ffffff",
              }}
              loading="lazy"
            >
              <h1>Wedding Day Wedding Day</h1>
            </Marquee>
          </div>
          <div className="absolute top-0 text-white flex justify-end w-full   px-2">
            <h1 className="cursor-pointer scale-95 hover:scale-100 transition-all duration-300 text-lg">
              [View Project]
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;

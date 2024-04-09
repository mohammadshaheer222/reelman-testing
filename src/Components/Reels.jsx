import { Parallax } from "react-parallax";
import Marquee from "react-fast-marquee";
import video1 from "/src/assets/images/video/video1.gif"
import video2 from "/src/assets/images/video/video2.gif"

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
        <div className="relative">
          <Parallax
            key={index}
            strength={600}
            bgImage={video.video}
            style={{
              minHeight: "100vh",
              height: "auto",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute top-0  w-full h-full flex justify-center items-end mix-blend-difference">
            <Marquee>
              <h1 className="text-white text-8xl md:text-9xl font-medium space-x-4">  Wedding Day Wedding Day </h1>
            </Marquee>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;

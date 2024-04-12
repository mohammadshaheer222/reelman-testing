import { Parallax } from "react-parallax";
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
  ];

  return (
    <div className="py-6">
      {videos.map((video, index) => (
        <div key={index} className="relative">
          <Parallax
            key={index}
            strength={600}
            bgImage={video.video}
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 w-full text-center text-white">
              <Marquee
                gradientColor={[255, 255, 255]}
                gradientWidth={30}
                speed={40}
                pauseOnHover={true}
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                <h1>Wedding Day Wedding Day</h1>
              </Marquee>
            </div>
          </Parallax>
        </div>
      ))}
    </div>
  );
};

export default Reels;

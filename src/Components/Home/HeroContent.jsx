import { Background, Parallax } from "react-parallax";

const HeroContent = ({ images }) => {
    // console.log(images)
  return (
    <div>
      <Parallax
        strength={500}
        style={{
          minHeight: "100vh",
          height: "auto",
          width: "100%",
        }}
      >
        <Background className="custom-bg w-screen h-screen">
          <img
            src={images}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </Background>
      </Parallax>
    </div>
  );
};

export default HeroContent;

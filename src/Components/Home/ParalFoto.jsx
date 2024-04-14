import { Background, Parallax } from "react-parallax";
import parallaxImage from "/src/assets/images/paral2.jpg";

const ParalFoto = () => {
  return (
    <div className="py-6">
      <Parallax
        className="md:h-full"
        strength={500}
        style={{
          minHeight: "50vh",
          maxHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Background className="custom-bg w-screen ">
          <img
            src={parallaxImage}
            alt=""
            className="h-[100vh] w-full object-cover object-center"
            loading="lazy"
          />
        </Background>
      </Parallax>
    </div>
  );
};

export default ParalFoto;

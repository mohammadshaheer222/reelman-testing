import { Parallax } from "react-parallax";
import parallaxImage from "/src/assets/images/paral2.jpg";

const ParalFoto = () => {
  return (
    <div className="py-6">
      <Parallax
        className="md:h-[100vh]"
        strength={500}
        bgImage={parallaxImage}
        style={{
          minHeight: "30vh",
          maxHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Parallax>
    </div>
  );
};

export default ParalFoto;

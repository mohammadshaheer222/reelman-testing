import { Parallax } from "react-parallax";
// import parallax from "/src/assets/images/parallelax.jpg"
import parallax from "/src/assets/images/paral2.jpg";

const ParalFoto = () => {
  return (
    <div className="py-6">
      <Parallax
        strength={500}
        style={{
          backgroundImage: `url(${parallax})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[50vh] w-[100vh] md:h-[100vh]"></div>
      </Parallax>
    </div>
  );
};

export default ParalFoto;

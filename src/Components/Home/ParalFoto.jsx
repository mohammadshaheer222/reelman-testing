import { Parallax } from "react-parallax";
// import parallax from "/src/assets/images/parallelax.jpg"
import parallax from "/src/assets/images/paral2.jpg";

const ParalFoto = () => {
  return (
    <div className="py-6">
      <Parallax bgImage={parallax} strength={500}>
        <div className="h-64 w-full md:h-[80vh]"></div>
      </Parallax>
    </div>
  );
};

export default ParalFoto;

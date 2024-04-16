import About from "../Components/Home/About";
import Hero from "../Components/Home/Hero";
import Wedding from "../Components/Home/Wedding";
import ParalFoto from "../Components/Home/ParalFoto";
import Reels from "../Components/Home/Reels";
import Instagram from "../Components/Home/Instagram";
import Services from "../Components/Home/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <ParalFoto />
      <Wedding />
      <Reels />
      <Instagram />
    </div>
  );
};

export default HomePage;

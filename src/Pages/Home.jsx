import About from "../Components/About";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Wedding from "../Components/Wedding";
import ParalFoto from "../Components/ParalFoto";
import Reels from "../Components/Reels";
import Instagram from "../Components/Instagram";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ParalFoto />
      <Wedding />
      <Reels />
      <Instagram />
    </div>
  );
};

export default Home;

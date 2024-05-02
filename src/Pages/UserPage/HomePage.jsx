import About from "../../Components/User/Home/About";
import Hero from "../../Components/User/Home/Hero";
import Wedding from "../../Components/User/Home/Wedding";
import ParalFoto from "../../Components/User/Home/ParalFoto";
import Reels from "../../Components/User/Home/Reels";
import Instagram from "../../Components/User/Home/Instagram";
import Services from "../../Components/User/Home/Services";
import MidSection from "../../Components/User/Home/MidSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <MidSection />
      {/* <Services /> */}
      <ParalFoto />
      <Wedding />
      <Reels />
      <Instagram />
    </div>
  );
};

export default HomePage;

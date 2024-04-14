
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import WeddingPage from "./Pages/WeddingPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Wedding from "./Pages/Wedding";
import Footer from "./Components/Home/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding" element={<Wedding />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

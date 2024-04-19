import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import NavbarAdmin from "./Components/Admin/Home/Navbar";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import WeddingPage from "./Pages/WeddingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/AdminPage/LoginPage";
import DashBoardPage from "./Pages/AdminPage/DashBoardPage";
import AddSlide from "./Components/Admin/Slide/AddSlide";
import ListSlide from "./Components/Admin/Slide/ListSlide";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="wedding" element={<WeddingPage />} />
          <Route path="details" element={<DetailsPage />} />
        </Route>
      </Routes>

      {/* admin */}
      <Routes>
        <Route path="/reelman-admin" element={<NavbarAdmin />}>
          <Route index element={<LoginPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="add-slide" element={<AddSlide />}/>
          <Route path="list-slide" element={<ListSlide />}/>
        </Route>
      </Routes>
{/* h */}
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
};

export default App;

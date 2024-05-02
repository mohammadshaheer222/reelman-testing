import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/User/Home/Navbar";
import Footer from "./Components/User/Home/Footer";
import NavbarAdmin from "./Components/Admin/Home/Navbar";
import DetailsPage from "./Pages/UserPage/DetailsPage";
import HomePage from "./Pages/UserPage/HomePage";
import WeddingPage from "./Pages/UserPage/WeddingPage";
import LoginPage from "./Pages/AdminPage/LoginPage";
import DashBoardPage from "./Pages/AdminPage/DashBoardPage";
import ListSlide from "./Components/Admin/Slides/ListSlides";
import AddMid from "./Components/Admin/Slides/AddMid";
import AddHero from "./Components/Admin/Slides/AddHero";
import Wedding from "./Components/Admin/Wedding/Wedding";
import ListWedding from "./Components/Admin/Wedding/ListWedding";
import EditProduct from "./Components/Admin/Wedding/EditProduct";
import ContactPage from "./Pages/UserPage/ContactPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="wedding" element={<WeddingPage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="contact" element={<ContactPage />}/>
        </Route>
      </Routes>

      {/* admin */}
      <Routes>
        <Route path="/reelman-admin" element={<NavbarAdmin />}>
          <Route index element={<LoginPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="add-slide" element={<AddHero />} />
          <Route path="mid-slide" element={<AddMid />} />
          <Route path="list-slide" element={<ListSlide />} />
          <Route path="add-wedding" element={<Wedding />} />
          <Route path="list-wedding" element={<ListWedding />} />
          <Route path="edit-wedding/:id" element={<EditProduct />} />
        </Route>
      </Routes>
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

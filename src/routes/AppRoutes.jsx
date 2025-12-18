import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CsrPage from "../pages/CsrPage/CsrPage";




const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
       
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/csr" element={<CsrPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CsrPage from "../pages/CsrPage/CsrPage";
import CareerPage from "../pages/CareerPage/CareerPage";
import JobdetailsPage from "../pages/JobdetailsPage/JobdetailsPage";
import InitiativesDetails from "../pages/InitiativesdetailsPage/InitiativesdetailsPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";




const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
       
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/csr" element={<CsrPage />} />
         <Route path="/career" element={<CareerPage />} />
         <Route path="/careers/:jobId" element={<JobdetailsPage />} />
         <Route path="/initiatives" element={<InitiativesDetails />} />
         <Route path="/events" element={<EventsPage />} />
         <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

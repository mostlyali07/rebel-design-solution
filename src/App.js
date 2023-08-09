import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllServices from "./components/AllServices";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SearchEngineOptimization from "./components/SearchEngineOptimization";
import AppDevelopment from "./components/AppDevelopment";
import ContentMarketing from "./components/ContentMarketing";
import GraphicDesign from "./components/GraphicDesign";
import SocialMediaMarketing from "./components/SocialMediaMarketing";
import WebsiteContent from "./components/WebsiteContent";
import GoogleAdsManagement from "./components/GoogleAdsManagement";
import WebsiteDesignAndDevelopment from "./components/WebsiteDesignAndDevelopment";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <CustomCursor />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/seo-services" element={<SearchEngineOptimization />} />
          <Route
            path="/app-development-services"
            element={<AppDevelopment />}
          />
          <Route
            path="/content-marketing-services"
            element={<ContentMarketing />}
          />
          <Route path="/graphics-design-services" element={<GraphicDesign />} />
          <Route
            path="/social-media-marketing-services"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/website-design-development-services"
            element={<WebsiteDesignAndDevelopment />}
          />
          <Route
            path="/website-content-services"
            element={<WebsiteContent />}
          />
          <Route
            path="/google-ads-management-services"
            element={<GoogleAdsManagement />}
          />
          <Route path="/rebel-admin" element={<LoginPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutTIW from "./pages/about-tiw";
import CustomerService from "./pages/customer-service";
import TeamCollaboration from "./pages/team-collaboration";
import SassLanding from "./pages/sass-landing";
import Corporate from "./pages/corporate";
import AppLanding from "./pages/app-landing";
import CryptoWalletOne from "./pages/crypto-wallet-one";
import CryptoWalletTwo from "./pages/crypto-wallet-two";
import CryptoToken from "./pages/crypto-token";
import Newsletter from "./pages/newsletter";
import SassLandingTwo from "./pages/sass-landing-two";
import DefiLanding from "./pages/defi-landing";
import Chatbot from "./pages/chatbot";
import Business from "./pages/business";
import Finance from "./pages/finance";
import Accounting from "./pages/accounting";
import Portfolio from "./pages/portfolio";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy-policy";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-details";
import AboutUs from "./pages/about-us";
import OurServices from "./pages/our-services";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import ScrollToTop from "./ScrollToTop";
import WhyJoinTIW from "./pages/why-join-us";
import Events from "./pages/events";
import NetworkCalls from "./pages/network-calls";
import Partners from "./pages/partners";
import Pricing from "./pages/pricing";
import TeamDetail from "./pages/team-details";
import ComingSoon from "./pages/coming-soon";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/about" element={<AboutTIW />} />
        <Route path="/about/:id" element={<TeamDetail />} />
        <Route path="/why-join-us" element={<WhyJoinTIW />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/network-calls" element={<NetworkCalls />} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

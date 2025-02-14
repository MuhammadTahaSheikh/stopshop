import "./App.css";
import Services from "./Component/DedicatedServices/Services";
import Servicetest from "./Component/ServiceMain/ServiceTest";
import Footer from "./Component/FooterStop/Footer";
import Faq from "./Component/FrequentlyAQ/Faq";
import Navbar from "./Component/NavbarMain/Navbar";
import NavbarMain from "./Component/NavbarUpper/NavbarMain";
import ListService from "./Component/AllServices/ListService";
import Pricing from "./Component/PricingPlan/Pricing";
import Testimonial from "./Component/TestimonailSection/Testimonial";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import AllCOmponent from "./Component/AllCOmponent";
import TextMarketing from "./Component/AllServices/TextMarketing";
import ColdCalling from "./Component/AllServices/ColdCalling";
import EmailMarketing from "./Component/AllServices/EmailMarketing";
import BlogContent from "./Component/AllServices/BlogContent";
import RinglessVoice from "./Component/AllServices/RinglessVoice";
import FollowupManager from "./Component/AllServices/FollowupManager";
import DigitalMarketing from "./Component/AllServices/DigitalMarketing";
import AcquistionManager from "./Component/AllServices/AcquistionManager";
import AccountBookkeeping from "./Component/AllServices/AccountBookkeeping";
import PostCard from "./Component/AllServices/PostCard";
import ContactUs from "./Component/Contact/ContactUs";
import SignIn from "./Component/Sign/SignIn";
import Dashboard from "./Component/Sign/Dashboard";
import Blog from "./Component/Sign/Blog";
import PostOpen from "./Component/Sign/PostOpen";
import Category from "./Component/Sign/Category";
import Tags from "./Component/Sign/Tags";
import About_us from "./Component/About/About_us";
import FormGet from "./Component/Form/FormGet";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<AllCOmponent />} />
          <Route path="/text-marketing" element={<TextMarketing />} />
          <Route path="/list-service" element={<ListService />} />
          <Route path="/cold-calling" element={<ColdCalling />} />

          <Route exact path="/email-marketing" element={<EmailMarketing />} />
          <Route exact path="/blog-content" element={<BlogContent />} />
          <Route exact path="/ringless-voice" element={<RinglessVoice />} />
          <Route exact path="/followup-manager" element={<FollowupManager />} />
          <Route
            exact
            path="/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            exact
            path="/acquistion-manager"
            element={<AcquistionManager />}
          />
          <Route
            exact
            path="/account-book-keeping"
            element={<AccountBookkeeping />}
          />
          <Route exact path="/contact-us" element={<FormGet />} />
          <Route exact path="/about-us" element={<About_us />} />

          <Route exact path="/post-card" element={<PostCard />} />
          <Route exact path="/admin-sign-in" element={<SignIn />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/blogs/:id/:title" element={<PostOpen />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/tags/:id" element={<Tags />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

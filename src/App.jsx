import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Membership from "./pages/Membership.jsx";
import ScrollToUp from './components/ScrollToUp.jsx'
import WhatsAppButton from "./components/WhatsappButton.jsx";

export default function App() {
  const { pathname } = useLocation();
  // useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <Navbar />
          <ScrollToUp/>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <WhatsAppButton/>
      <Footer />
    </>
  );
}

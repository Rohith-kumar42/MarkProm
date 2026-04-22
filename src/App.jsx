import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resorts from './pages/Resorts';
import LandPlots from './pages/LandPlots';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/resorts"  element={<Resorts />} />
        <Route path="/land"     element={<LandPlots />} />
        <Route path="/about"    element={<About />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

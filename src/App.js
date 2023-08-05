import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortfolioDisplay from "./pages/PortfolioDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/react-portfolio" element={<About />} />
          <Route path="/react-portfolio/About" element={<About />} />
          <Route path="/react-portfolio/Portfolio" element={<Portfolio />} />
          <Route path="`${url}`" element={<PortfolioDisplay />} />
          <Route path="/react-portfolio/Resume" element={<Resume />} />
          <Route path="/react-portfolio/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;

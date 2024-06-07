import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  const items = ["Home", "About", "Projects", "Contact"];

  return (
    <BrowserRouter basename={"/"}>
      <div className="app">
        <Nav items={items} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));

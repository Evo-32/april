import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <ul>
        <link to={"/"}>Home</link>
        <link to={"/about"}>About</link>
        <link to={"/contact"}>Contact</link>
      </ul>
    </div>
  );
};

export default App;

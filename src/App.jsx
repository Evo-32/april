import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <Router>
      <div className="bg-pink-200 h-screen">
        <div className=" bg-green-200  text-blue-400 text-2xl border border-blue-400 px-4">
          <h1>John Doe</h1>
        </div>

        <div className="bg-pink-200 h-screen flex">
          <div
            className="text-blue-500 p-4 h-full border-r"
            style={{ width: "200px" }}
          >
            <nav>
              <div className="flex flex-col">
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="py-2 px-4 block hover:text-red-600"
                      onClick={() => handleNavItemClick("home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="py-2 px-4 block hover:text-red-600"
                      onClick={() => handleNavItemClick("about")}
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="py-2 px-4 block hover:text-red-600"
                      onClick={() => handleNavItemClick("contact")}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="bg-yellow-200 h-screen flex-grow">
            {selectedNavItem === "home" && <Home />}
            {selectedNavItem === "about" && <About />}
            {selectedNavItem === "contact" && <Contact />}
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;

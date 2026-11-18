import React from "react";
import Navbar from "./Components/Nabar";
import Footer from "./Components/Footer";
import Home from "./assets/pages/Home";
import Product from "./assets/pages/product";
import Notfound from "./assets/pages/Notfound";
import Contact from "./assets/pages/Contact";
import Man from "./assets/pages/Man";
import Women from "./assets/pages/Women";
import Courses from "./assets/pages/courses";
import Coursesdetails from "./assets/pages/Couresdetails";  
import Navbar2 from "./Components/navbar2";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-black  h-screen text-white">
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} > 
          <Route path="Man" element={<Man />} />
          <Route path="Women" element={<Women/>} />
        </Route>
        

       <Route path="/Contact" element={<Contact />} />
       <Route path="/Courses" element={<Courses />} />
       <Route path="/Courses/:id" element={<Coursesdetails />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import More from "../pages/More";
import MyNavbar from "../components/Navbar";
import PrivateRouter from "./Privaterouter";
import Login from "../pages/Login";
import Footer from "../pages/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

// const AppRouter = () => {
//     return (
//       <BrowserRouter>
//         <MyNavbar />
//         <Routes>
//           <PrivateRoute path="/" element={<Home />} />
//           <PrivateRoute path="/About" element={<About />} />
//           <PrivateRoute path="/Contact" element={<Contact />} />
//           <PrivateRoute path="/More" element={<More />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   };

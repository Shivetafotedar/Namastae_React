import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routeconstant from "./Routeconstant";
import Home from "../component/Home";
import About from "../component/About";
import Contact from "../component/Contact";
import Layout from "../component/Layout";
import RestrauntMenu from "../component/RestrauntMenu";
import Cart from "../component/Cart";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Routeconstant.LAYOUT} element={<Layout />}>
          <Route path={Routeconstant.HOME} element={<Home />} />
          <Route path={Routeconstant.ABOUT} element={<About />} />
          <Route path={Routeconstant.CONTACT} element={<Contact />} />
          <Route path={Routeconstant.MENU} element={<RestrauntMenu />} />
          <Route path={Routeconstant.CART} element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

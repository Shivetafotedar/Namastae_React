import React, { useState } from "react";
import { Link } from "react-router-dom";
import routeconstant from "../Routing/Routeconstant";
const Foodlogo = () => {
  return (
    <img
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      height={"50px"}
      alt="logo"
    />
  );
};
const loggedInUser = () => {
  // API call to check authentication
  return false;
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Foodlogo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={routeconstant.HOME}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routeconstant.ABOUT}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to={routeconstant.CONTACT}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={routeconstant.CART}>
                Cart
              </Link>
            </li>
          </ul>

          <div className="d-flex justify-content-between">
            {isLoggedIn ? (
              <button
                className="btn btn-outline-success mr-2"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-outline-success mr-2"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
export { Foodlogo };

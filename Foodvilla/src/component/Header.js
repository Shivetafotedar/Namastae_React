import React from "react";
const Foodlogo=()=>{
  return(
    <img
    src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    height={"50px"}
    alt="logo"
  />
  )
}
const Header = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Foodlogo/>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Cart
              </a>
            </li>
          </ul>
          <form className="d-flex justify-content-between">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success mr-2" type="submit">
              Search
            </button>
            <button className="btn btn-outline-success mr-2" type="submit">
              Login
            </button>
            <button className="btn btn-outline-success mr-2" type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
export {Foodlogo}
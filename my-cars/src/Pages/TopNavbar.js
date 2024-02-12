import React from "react";
import "../Styles/TopNavbar.css";
import menuData from "../Data/menu.json";

 const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <a className="navbar-brand" href="/">
        <img className="img-fluid logo" src="https://w7.pngwing.com/pngs/100/1/png-transparent-car-suv-silhouette.png" alt="logo"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {menuData.map((item, index) => (
            <li className="nav-item font-weight-bold" key={index}>
              <a className="nav-link" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
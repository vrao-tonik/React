import React from "react";
import { Link } from "react-router-dom";
import "../Styles/TopNavbar.css";
import menuData from "../Data/menu.json";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <Link className="navbar-brand" to="/">
        <img
          className="img-fluid logo"
          src="https://w7.pngwing.com/pngs/100/1/png-transparent-car-suv-silhouette.png"
          alt="logo"
        />
      </Link>
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
              <Link className="nav-link" to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;

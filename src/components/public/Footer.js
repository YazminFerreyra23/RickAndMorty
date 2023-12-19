import React, { useState } from "react";

export const Footer = () => {

  const [clicks, setClicks] = useState(0);

  const year = new Date().getFullYear();
  const companyName = "Yazmin Ferreyra";

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; {year} {companyName} clicks = {clicks}
        </p>

        <span onClick={handleClick}>
          <img
            className="App-logo"
            heigth="52"
            src="ROSE.png"
            alt="logo-giratorio"
          ></img>
        </span>
        <ul className="className col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Features</a>
          </li>
          <li className="nav-item">
            <a href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#">FAQs</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

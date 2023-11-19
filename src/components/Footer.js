import React from "react";
import { Table } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  const headingStyle = { color: "red" };
  const fixedSizeDivStyle = {
    width: "100px", // Adjust the width to your desired fixed size
    height: "50px", // Adjust the height to your desired fixed size
    backgroundColor: "black", // Customize the background color
    color: "white", // Customize the text color
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    postion: "relative",
    textAlign: "center",
  };

  return (
    <div>
      <div
        className="container Footer"
        // style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="row">
          <div className="col-md-6 col-lg-5 col-sm-12 ft-1">
            <h3 style={{ color: "red" }}>Contact</h3>
            <p>
              Plot No 28, 2nd Floor Above Vikhyath Eye & Retina Care Center,
              Ganeshpur Road, Near Military Hospital, Belagavi, Karnataka –
              591108 919535533588 contact@brainsmediasolutions.com
            </p>
            <div className="footer-icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fas fa-camera"></i>
              <i class="far fa-envelope"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
          {/* Per Click SEO Optimization Privacy Policy */}
          <div className="col-md-6 col-lg-3 col-sm-12 ft-2">
            <h3>Services</h3>
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Content Writing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Website
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Developement
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Social Media
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Marketing Pay
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12 ft-3">
            <h5 style={{ color: "red" }}>Social Media</h5>
            <p>+93353333</p>
            <p>new delhi</p>
            <p>onesfosj@gmail.com</p>
          </div>
        </div>
      </div>

      <footer>
        <div
          class="container "
          style={{ color: "white", backgroundColor: "black" }}
        >
          <p>&copy; 2023 Your Website Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
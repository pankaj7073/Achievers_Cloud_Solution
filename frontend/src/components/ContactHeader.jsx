import React from "react";
import "./css/contactheader.css";
import { useLocation } from "react-router-dom";

// Start Function
const ContactHeader = () => {
  const location = useLocation();
  return (
    <header className="contact-header">
      <div className="main-div container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 costum-about-us-header-container">
              <div className="parent-heading">
                <div className="child-heading">
                  <h1 className="blog-heading">Contact Us</h1>
                  <p className="blog-path text-center blog-sub-heading-para">
                    <i className="fa-solid fa-house"></i>&nbsp;
                    <span>Home</span>
                    {location.pathname}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;

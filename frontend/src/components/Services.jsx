import React from "react";
import { useLocation } from "react-router-dom";
import ServiceCard from "./shared/ServiceCard";
import ServiceCardData from "./temp_data/ServiceCardData";
import "./css/services.css";

// Start Function
const Services = () => {
  const location = useLocation();

  const serviceCards =
    location.pathname === "/service"
      ? ServiceCardData // If the path is "/home/service", don't slice
      : ServiceCardData.slice(0, 6); // Otherwise, slice the array

  return (
    <section className="services_sec">
      {/* Upper Div */}
      <div classname="upperDiv container-fluid">
        <div className="container">
          <div className="row py-4">
            <div className="card my-3 col-xl-6 col-sm-12 border-0 costum-service-header">
              <div className="card-header fs-4 border-0 bg-transparent costum-services-header same-property-sub-heading-page-hero">
                SERVICES
              </div>
              <div className="card-body card-custom-body">
                <h2 className="card-title card-costum-title costum-page-service-title">
                  Services We Offer To Achieve Your Business Goals
                </h2>
                <p className=" fs-5 costum-hero-page-para">
                  We are Achiever! Provide services from Salesforce to Game
                  Development. Whether it is Web Development, Digital Marketing,
                  SEO Development, or a Payment Gateway for your business. We
                  are here at your service.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 my-xl-5 my-sm-1">
              <a href="/service">
                <button
                  type="button"
                  className="costum-btn float-xl-end services_sec_btn_all_services"
                >
                  See All Services
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Div */}
      <div className="lowerDiv container-fluid">
        <div className="container">
          <div className="row">
            {serviceCards.map((data, index) => {
              return (
                <ServiceCard
                  key={index}
                  id={data.id}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

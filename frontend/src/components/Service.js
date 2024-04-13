import React from "react";
import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const {name, countDoctors, openDays, pic } = props.service;

const navigate = useNavigate();

    const handleMoreDetails = () => {
    navigate("/service/:serviceId");
  };

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <img src={pic} className="card-img-top" alt="..." height="200" />
          <div className="card-body">
            <h4 className="card-title text-center">{name}</h4>
            <h6>
              <i className="fas fa-user-nurse"></i> Specialised Doctors: {countDoctors}
            </h6>
            <h6>
              <i className="fas fa-calendar-week"></i> Open: {openDays}
            </h6>
            <p>Click on the details button to see more information about this service.</p>
            <button className="default-btn d-block mx-auto" onClick={handleMoreDetails}>
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

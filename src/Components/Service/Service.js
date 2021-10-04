import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import "./Service.css";
const Service = () => {
  // use state and useeffect for getting data from services.json(internal file)
  const [services, setservice] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);
  return (
    <div className="eliment_Top_margin">
      <div className="container">
        <div className="title">
          <h2> Our Courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            excepturi non aliquam veritatis labore dolorum laboriosam rem
            voluptates aliquid saepe?
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <ServiceDetails
              key={service.name}
              service={service}
            ></ServiceDetails>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Service;

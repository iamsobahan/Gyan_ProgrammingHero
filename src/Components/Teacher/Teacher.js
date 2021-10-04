import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Teacherdetails from "../Teacherdetails/Teacherdetails";
import "./Teacher.css";

const Teacher = () => {
  const [person, setperson] = useState([]);
  useEffect(() => {
    fetch("./teachers.json")
      .then((res) => res.json())
      .then((data) => setperson(data));
  }, []);
  return (
    <div className="eliment_Top_margin">
      <div className="container">
        <div className="title">
          <h2>Our Teachers</h2>
        </div>
        <Row xs={1} md={2} lg={4} className="g-5">
          {person.map((teacher) => (
            <Teacherdetails
              key={teacher.name}
              teacher={teacher}
            ></Teacherdetails>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Teacher;

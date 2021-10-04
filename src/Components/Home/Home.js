import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Button, Container } from "react-bootstrap";
import Course from "../Course/Course";
import "./Home.css";
import { useHistory } from "react-router";

const Home = () => {
  //  use state and use effect for getting data from courses.json
  const [course, setcourse] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setcourse(data));
  }, []);
  //  click handler for routing
  let history = useHistory();
  const clickhander = () => {
    history.push("/service");
  };
  return (
    <div>
      <div className="banner_part">
        <div className="overlay">
          <Container>
            <h1>Let’s Learn</h1>
            <h1>For Bright Future</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus comodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <Button onClick={clickhander} variant="warning">
              Start a course
            </Button>
          </Container>
        </div>
      </div>
      <Container>
        <h2 className="course_title">Our populer courses</h2>
        <Row xs={1} md={2} lg={4} className="g-4 home_row">
          {course.map((course) => (
            <Course key={course.name} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

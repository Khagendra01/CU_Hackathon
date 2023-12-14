import React, { useContext, useEffect } from "react";

import "../styles/displayCourse.css";
import { useNavigate } from "react-router-dom";
import { SubjectContext } from "../wrapper/addSubject";
import { AuthContext } from "../App";

function DisplayCourse(props) {
  const { user } = useContext(AuthContext);
  const { subjects, getData } = useContext(SubjectContext);

  useEffect(() => {
    if (user !== undefined) getData();
  }, [user]);

  const getCardStyles = (displayType) => {
    switch (displayType) {
      case "Quiz Menu":
        return {
          backgroundColor: "#AEA057",
          color: "black",
        };
    }
  };

  const courseClicked = (id, title) => {
    props.onCourseClicked(id, title);
  };

  return (
    <>
      <h1 className="menu-title"> {props.displayType} </h1>
      <div className="course-list">
        {subjects.map((course) => (
          <div
            onClick={() => courseClicked(course.id, course.name)}
            className="course-card"
            style={getCardStyles(props.displayType)}
          >
            <h2 style={{ textTransform: "capitalize" }}>{course.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayCourse;

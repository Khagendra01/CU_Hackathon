import { React, useState } from "react";
import "../styles/quizMenu.css";
import Navbar from "../reusables/navbar";
import DisplayCourse from "../reusables/displayCourse";
import Quiz from "../reusables/quiz";

function QuizMenu() {
  const [display, setDisplay] = useState(true);
  const [topic, setTopic] = useState();

  const handleCourseClicked = ( id, title ) => {
    setDisplay(false);
    setTopic(title)
  };

  return (
    <div className="quiz-main">
      <Navbar />

      {display && (
        <>
          {" "}
          <DisplayCourse
            displayType={"Quiz Menu"}
            onCourseClicked={handleCourseClicked}
          />{" "}
        </>
      )}

      {!display && <Quiz topic={topic} />}
    </div>
  );
}

export default QuizMenu;

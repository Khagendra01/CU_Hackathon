import React, { useState } from "react";

import "../styles/noteMenu.css";
import Navbar from "./reusables/navbar";
import DisplayCourse from "./reusabless/displayCourse";
import DisplayNote from "./Notes/displayNote";


function Note() {
  const [display, setDisplay] = useState(true);
  const [courseId, setCourseId] = useState();


  const handleCourseClicked = ( id ) => {
    setDisplay(false);
    setCourseId(id);
  };

  return (
    <div className="note-main">
      <Navbar />

      {display && (
        <>
          {" "}     
          <DisplayCourse
            displayType={"Note Menu"}
            onCourseClicked={handleCourseClicked}
          />{" "}
        </>
      )}

      {!display && <DisplayNote courseId={courseId}/>}
    </div>
  );
}

export default Note;

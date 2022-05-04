import React from "react";
import numbersStyle from "./styles/numbers.module.css";

function Numbers() {
  return (
    <div className={numbersStyle.section}>
      <h4>OUR NUMBERS</h4>

      <div>
        <div>
          <span>STUDENTS TRAINED</span>
          <span>80</span>
        </div>

        <div>
          <span>PROJECTS</span>
          <span>100</span>
        </div>

        <div>
          <span>YEARS</span>
          <span>2+</span>
        </div>
      </div>
    </div>
  );
}

export default Numbers;

import React from "react";
import "../style.scss";

const GetStarted = (props) => {
  console.log("props", props);
  return (
    <div className="getStartedContainer">
      <div className="getStarted">
        <ul className="list">
          <li>1.Copy and paste the paragraph</li>
          <li>2.Copy and paste the paragraph</li>
          <li>3.Copy and paste the paragraph</li>
        </ul>
        <div className="wrap">
          <button className="button" onClick={() => props.history.push("/home")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
   "Cybersecurity",
          "Site Reliability Engineering",
          "DevOps",
          "DevSecOps",
          "Cloud Plaform Engieering",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
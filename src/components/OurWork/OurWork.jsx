
// import React from "react";
// import arrowDown from "../assets/arrow_down.png"; // adjust path if needed
// import ourwork1 from "../assets/ourwork1.jpg";
// import ourwork2 from "../assets/ourwork2.jpg";
// import ourwork3 from "../assets/ourwork3.jpg";
// import ourwork4 from "../assets/ourwork4.jpg";

// function OurWork() {
//   return (
//     <section className="our-work-section">
//       <div className="our-work-header">
//         <h2 className="our-work-title">Our Work</h2>
//         <img src={arrowDown} alt="Scroll Down" className="arrow-down" />
//       </div>
//       <div className="our-work-gallery">
//         <img src={ourwork1} alt="Project 1" className="work-image" />
//         <img src={ourwork2} alt="Project 2" className="work-image" />
//         <img src={ourwork3} alt="Project 3" className="work-image" />
//         <img src={ourwork4} alt="Project 4" className="work-image" />
//       </div>
//     </section>
//   );
// }

// export default OurWork;

import React from "react";
import arrowDown from "../../assets/arrow_down.png"; // adjust if needed
import ourwork1 from "../../assets/ourwork1.jpg";
import ourwork2 from "../../assets/ourwork2.jpg";
import ourwork3 from "../../assets/ourwork3.jpg";
import ourwork4 from "../../assets/ourwork4.jpg";

function OurWork() {
  return (
    <section id ="our-work"section className="our-work-section">
      <div className="our-work-header">
        <h2 className="our-work-title">
          <span className="our-word">Our</span>{" "}
          <span className="work-word">Work</span>
        </h2>
        <img src={arrowDown} alt="Scroll Down" className="arrow-down" />
      </div>
      <div className="our-work-gallery">
        <img src={ourwork1} alt="Project 1" className="work-image" />
        <img src={ourwork2} alt="Project 2" className="work-image" />
        <img src={ourwork3} alt="Project 3" className="work-image" />
        <img src={ourwork4} alt="Project 4" className="work-image" />
      </div>
    </section>
  );
}

export default OurWork;
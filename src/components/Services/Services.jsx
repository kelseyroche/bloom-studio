
// import React from "react";

// function Services() {
//   return (
//     <section className="services-section">
//       <div className="services-header">
//         <h2>
//           <span className="what">What</span>
//           <span className="we-do">We Do</span>
//         </h2>
//         <p className="subheader">Elevate your brand and make your mark in history</p>
//       </div>
//       <div className="services-content">
//         <img src="../assets/doubleflowerblack.png" alt="Double flower" className="services-image" />
//         <div className="services-bubbles">
//           <div className="service-bubble">Website Ideation</div>
//           <div className="service-bubble">Custom Web Design</div>
//           <div className="service-bubble">Web Development</div>
//           <div className="service-bubble">SEO Optimization</div>
//           <div className="service-bubble">Hosting</div>
//           <div className="service-bubble">Consulting</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React from "react";
import doubleflowerblack from "../../assets/doubleflowerblack.png"; // Fix the image path
import './Services.css'

function Services() {
  return (
    <section id = "services" section className="services-section">
      <div className="services-header">
        <h2>
          <span className="what-font">What </span>
          <span className="we-do-font">We Do</span>
        </h2>
        <img src={doubleflowerblack} alt="Double Flower" />
      </div>
      <p className="subheader">ELEVATE YOUR BRAND AND MAKE YOUR MARK ON CLIENTS</p>
      <div className="bubble-row">
        <div className="bubble">Website Ideation</div>
        <div className="bubble">Custom Development</div>
        <div className="bubble">Hosting</div>
      </div>
      <div className="bubble-row">
        <div className="bubble">Creative Direction</div>
        <div className="bubble">Logo & Visual Identity Design</div>
        <div className="bubble">Website Maintenance</div>
      </div>
    </section>
  );
}

export default Services;
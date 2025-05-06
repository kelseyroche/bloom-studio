
// import React from "react";
// import flowerImage from "../../assets/double_flower_blackbg.png";
// import kelseyPhoto from "../../assets/kelsey.jpg";
// import './About.css';
// import "../../App.css";

// function About() {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-top">
//         <div className="about-left">
//           <h2 className="about-title">About</h2>
//           <div className="about-brand">
//             <span className="bloom">Bloom</span>
//             <span className="studio">Studio</span>
//           </div>
//           <img
//             src={flowerImage}
//             alt="Floral graphic"
//             className="about-flower"
//           />
//         </div>
//         <div className="about-right">
//           <img
//             src={kelseyPhoto}
//             alt="Kelsey"
//             className="about-photo"
//           />
//         </div>
//       </div>
//       <div className="about-bottom">
//         <p className="about-paragraph">
//             I’m Kelsey — a designer, developer, and creative thinker who believes a website should do more than just exist online. It should reflect your vision, elevate your brand, and connect meaningfully with your audience. I focus on crafting sleek, modern websites that not only look beautiful but also function flawlessly.
//         </p>
//         <p className="about-paragraph">
//             Bloom Studio is built for small businesses, dreamers, and doers who want a bold digital presence. Whether you're launching something new or refreshing your brand, we design sites that are intuitive, impactful, and built to grow with you. Let’s create something people remember.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;

import React from "react";
import flowerImage from "../../assets/double_flower_blackbg.png";
import kelseyPhoto from "../../assets/kelsey.jpg";
import whiteLongLogo from "../../assets/white_long_logo2.png"; // Import the logo image
import './About.css';
import "../../App.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-top">
        <div className="about-left">
          <h2 className="about-title">About</h2>
          <div className="about-brand">
            <img src={whiteLongLogo} alt="Bloom Studio Logo" className="about-logo" />
          </div>
          <img
            src={flowerImage}
            alt="Floral graphic"
            className="about-flower"
          />
        </div>
        <div className="about-right">
          <img
            src={kelseyPhoto}
            alt="Kelsey"
            className="about-photo"
          />
        </div>
      </div>
      <div className="about-bottom">
        <p className="about-paragraph">
            I’m Kelsey — a designer, developer, and creative thinker who believes a website should do more than just exist online. It should reflect your vision, elevate your brand, and connect meaningfully with your audience. I focus on crafting sleek, modern websites that not only look beautiful but also function flawlessly.
        </p>
        <p className="about-paragraph">
            Bloom Studio is built for small businesses, dreamers, and doers who want a bold digital presence. Whether you're launching something new or refreshing your brand, we design sites that are intuitive, impactful, and built to grow with you. Let’s create something people remember.
        </p>
      </div>
    </section>
  );
}

export default About;
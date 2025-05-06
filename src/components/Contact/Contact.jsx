
// import React from "react";
// import "./Contact.css";
// import whiteLongLogo from "../../assets/white_long_logo.png";
// import whiteHalfFlower from "../../assets/white_half_flower.png";
// import { FaEnvelope, FaInstagram } from "react-icons/fa";

// function Contact() {
//   return (
//     <section className="contact-section">
//       <div className="contact-left">
//         <img src={whiteLongLogo} alt="Bloom Digital Logo" className="contact-logo" />
//         <div className="contact-text">
//           <h1 className="make-your">Make your</h1>
//           <h1 className="mark-text">
//             <span className="mark">mark</span>
//           </h1>
//           <div className="work-bubble">work with us</div>
//         </div>
//       </div>

//       <div className="contact-right">
//         <div className="contact-info">
//           <p>Email: hello@bloomdigital.com</p>
//           <p>Phone: (555) 123-4567</p>
//           <p>Location: Remote / NYC</p>
//         </div>
//         <div className="contact-icons">
//           <a href="mailto:hello@bloomdigital.com" aria-label="Email">
//             <FaEnvelope className="icon" />
//           </a>
//           <a href="https://instagram.com/bloomdigital" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//             <FaInstagram className="icon" />
//           </a>
//         </div>
//         <img src={whiteHalfFlower} alt="Floral graphic" className="right-flower" />
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React from "react";
import "./Contact.css";
import whiteLongLogo from "../../assets/white_long_logo.png";
import whiteHalfFlower from "../../assets/white_half_flower.png";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id= "contact" section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <img src={whiteLongLogo} alt="Bloom Digital Logo" className="contact-logo" />
          <div className="contact-text">
            <h1 className="make-your">Make your</h1>
            <h1 className="mark-text">
              <span className="mark">mark</span>
            </h1>
            <div className="work-bubble">work with us</div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-info">
            <p>Email: bloomstudiodev@gmail.com</p>
            <p>Phone: (203) 708-1606</p>
            <p>Location: Remote | Stamford | NYC</p>
          </div>
          <div className="contact-icons">
            <a href="mailto:bloomstudiodev@gmail.com" aria-label="Email">
              <FaEnvelope className="icon" />
            </a>
            <a
              href="https://instagram.com/bloomstudio.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
      <img src={whiteHalfFlower} alt="Floral graphic" className="right-flower" />
    </section>
  );
}

export default Contact;
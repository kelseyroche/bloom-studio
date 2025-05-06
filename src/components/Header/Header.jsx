
// import React, { useState } from "react";
// import logo from "../../assets/2.png";  // Update with the correct logo path
// import './Header.css'

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src={logo} alt="Bloom Digital Logo" />
//       </div>
//       <div className="burger-menu" onClick={toggleMenu}>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <nav className="dropdown-menu">
//           <ul>
//             <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
//             <li><a href="#about" onClick={toggleMenu}>About</a></li>
//             {/* <li><a href="#our-work" onClick={toggleMenu}>Our Work</a></li> */}
//             {/* <li><a href="#clients" onClick={toggleMenu}>Clients</a></li> */}
//             <li><a href="#services" onClick={toggleMenu}>What We Do</a></li>
//             <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
//             <li><a href="#work-with-us" onClick={toggleMenu}>Work With Us</a></li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;


import React, { useState } from "react";
import logo from "../../assets/2.png"; // Update with the correct logo path
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo wrapped in an anchor tag to scroll to top */}
      <a href="#top" className="logo">
        <img src={logo} alt="Bloom Digital Logo" />
      </a>

      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>What We Do</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            <li><a href="#work-with-us" onClick={toggleMenu}>Work With Us</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
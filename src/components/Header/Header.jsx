// import React, { useState } from "react";
// import { Menu } from "semantic-ui-react";

// function Header() {
//   const [activeItem, setActiveItem] = useState("home");
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleItemClick = (e, { name }) => setActiveItem(name);
//   const toggleMenu = () => setMenuVisible(!menuVisible);

//   return (
//     <header>
//       <Menu secondary className="header-menu">
//         <Menu.Item header>
//           <div className="logo">Bloom Digital</div>
//         </Menu.Item>

//         <Menu.Item
//           name="home"
//           active={activeItem === "home"}
//           onClick={handleItemClick}
//         />
//         <Menu.Item
//           name="about"
//           active={activeItem === "about"}
//           onClick={handleItemClick}
//         />
//         <Menu.Item
//           name="work"
//           active={activeItem === "work"}
//           onClick={handleItemClick}
//         />
//         <Menu.Item
//           name="clients"
//           active={activeItem === "clients"}
//           onClick={handleItemClick}
//         />
//         <Menu.Item
//           name="services"
//           active={activeItem === "services"}
//           onClick={handleItemClick}
//         />
//         <Menu.Item
//           name="contact"
//           active={activeItem === "contact"}
//           onClick={handleItemClick}
//         />

//         <Menu.Item className="hamburger" onClick={toggleMenu}>
//           <div className="hamburger-icon">☰</div>
//         </Menu.Item>
//       </Menu>

//       {/* Mobile Menu */}
//       {menuVisible && (
//         <div className="mobile-menu">
//           <Menu vertical>
//             <Menu.Item
//               name="home"
//               active={activeItem === "home"}
//               onClick={handleItemClick}
//             />
//             <Menu.Item
//               name="about"
//               active={activeItem === "about"}
//               onClick={handleItemClick}
//             />
//             <Menu.Item
//               name="work"
//               active={activeItem === "work"}
//               onClick={handleItemClick}
//             />
//             <Menu.Item
//               name="clients"
//               active={activeItem === "clients"}
//               onClick={handleItemClick}
//             />
//             <Menu.Item
//               name="services"
//               active={activeItem === "services"}
//               onClick={handleItemClick}
//             />
//             <Menu.Item
//               name="contact"
//               active={activeItem === "contact"}
//               onClick={handleItemClick}
//             />
//           </Menu>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

import React, { useState } from "react";
import logo from "../../assets/2.png";  // Update with the correct logo path
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bloom Digital Logo" />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Dropdown Menu */}
      {/* {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#our-work">Our Work</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#work-with-us">Work With Us</a></li>
          </ul>
        </nav>
      )} */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#our-work" onClick={toggleMenu}>Our Work</a></li>
            <li><a href="#clients" onClick={toggleMenu}>Clients</a></li>
            <li><a href="#services" onClick={toggleMenu}>What We Do</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            {/* <li><a href="#work-with-us" onClick={toggleMenu}>Work With Us</a></li> */}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
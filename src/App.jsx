
// import React from 'react'

// function App() {
//   return (
//     <>
//       <header>
//         <div className="logo">Bloom Digital</div>
//         <div className="hamburger">☰</div>
//       </header>

//       <main>
//         <section style={{ backgroundColor: "#ffffff" }} id="home">
//           <h1>Design for you</h1>
//           <button>Work With Us</button>
//           {/* Add 4 portrait images here */}
//         </section>

//         <section style={{ backgroundColor: "#2f2f2f", color: "white" }} id="about">
//           <h2>About</h2>
//         </section>

//         <section style={{ backgroundColor: "#ffffff" }} id="work">
//           <h2>Our Work</h2>
//         </section>

//         <section style={{ backgroundColor: "#2f2f2f", color: "white" }} id="clients">
//           <h2>Our Clients</h2>
//         </section>

//         <section style={{ backgroundColor: "#ffffff" }} id="services">
//           <h2>What We Do</h2>
//         </section>

//         <section style={{ backgroundColor: "#000000", color: "white" }} id="contact">
//           <h2>Contact Us</h2>
//         </section>

//         <section style={{ backgroundColor: "#ffffff" }} id="quote">
//           <h2>Work With Us</h2>
//         </section>
//       </main>
//     </>
//   );
// }

// export default App;

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import Clients from './components/Clients';
import Services from './components/Services';
import Contact from './components/Contact';
import WorkWithUs from './components/WorkWithUs';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <OurWork />
        <Clients />
        <Services />
        <Contact />
        <WorkWithUs />
      </main>
    </>
  );
}

export default App;
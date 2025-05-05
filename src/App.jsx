// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Bloom Digital Coming Soon...</h1>
//     </div>
//   )
// }

// export default App

function App() {
  return (
    <>
      <header>
        <div className="logo">Bloom Digital</div>
        <div className="hamburger">☰</div>
      </header>

      <main>
        <section style={{ backgroundColor: "#ffffff" }} id="home">
          <h1>Design for you</h1>
          <button>Work With Us</button>
          {/* Add 4 portrait images here */}
        </section>

        <section style={{ backgroundColor: "#2f2f2f", color: "white" }} id="about">
          <h2>About</h2>
        </section>

        <section style={{ backgroundColor: "#ffffff" }} id="work">
          <h2>Our Work</h2>
        </section>

        <section style={{ backgroundColor: "#2f2f2f", color: "white" }} id="clients">
          <h2>Our Clients</h2>
        </section>

        <section style={{ backgroundColor: "#ffffff" }} id="services">
          <h2>What We Do</h2>
        </section>

        <section style={{ backgroundColor: "#000000", color: "white" }} id="contact">
          <h2>Contact Us</h2>
        </section>

        <section style={{ backgroundColor: "#ffffff" }} id="quote">
          <h2>Work With Us</h2>
        </section>
      </main>
    </>
  );
}

export default App;
// import React from "react";

// function Clients() {
//   return (
//     <section className="clients-section">
//       <h2>Our Clients</h2>
//       <div className="client-logos">
//         {/* Insert client logos or names here */}
//         <p>Client 1</p>
//         <p>Client 2</p>
//         <p>Client 3</p>
//       </div>
//     </section>
//   );
// }

// export default Clients;

import React from "react";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png"; // You can use real logos later!

function Clients() {
  return (
    <section id="clients" section className="clients-section">
      <div className="clients-content">
        <h2 className="clients-title">
          <span className="our-word">Our</span>{" "}
          <span className="clients-word">Clients</span>
        </h2>
        <div className="client-logos">
          <img src={client1} alt="Client 1" />
          <img src={client2} alt="Client 2" />
          <img src={client3} alt="Client 3" />
          <img src={client4} alt="Client 4" />
          <img src={client5} alt="Client 5" />
          <img src={client6} alt="Client 6" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
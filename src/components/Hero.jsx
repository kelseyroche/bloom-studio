// import React from 'react';
// import arrow from '../assets/arrow.png';
// import content1 from '../assets/content1.png';
// import content2 from '../assets/content2.png';
// import content3 from '../assets/content3.png';
// import content4 from '../assets/content4.png';

// const Hero = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <div className="hero-text-row">
//           <h1 className="hero-main-text">Design</h1>
//           <img src={arrow} alt="Arrow" className="hero-arrow" />
//           <button className="hero-button">Work with us</button>
//         </div>
//         <h1 className="hero-sub-text">for you</h1>

//         <div className="hero-images-row">
//           <img src={content1} alt="Content 1" className="hero-image" />
//           <img src={content2} alt="Content 2" className="hero-image" />
//           <img src={content3} alt="Content 3" className="hero-image" />
//           <img src={content4} alt="Content 4" className="hero-image" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import arrow from '../assets/arrow.png';
import content1 from '../assets/content1.png';
import content2 from '../assets/content2.png';
import content3 from '../assets/content3.png';
import content4 from '../assets/content4.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-text-row">
            <h1 className="hero-main-text">Design</h1>
            <img src={arrow} alt="Arrow" className="hero-arrow" />
            <button className="hero-button">Work with us</button>
          </div>
          <h1 className="hero-sub-text">for you</h1>
        </div>

        <div className="hero-images-row">
          <img src={content1} alt="Content 1" className="hero-image" />
          <img src={content2} alt="Content 2" className="hero-image" />
          <img src={content3} alt="Content 3" className="hero-image" />
          <img src={content4} alt="Content 4" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
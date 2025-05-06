
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './WorkWithUs.css';

// function WorkWithUs() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_m202v4f',
//       'template_3jllpua',
//       form.current,
//       'Y4A5qny0IQyiRNSQf'
//     )
//     .then((result) => {
//       alert('Message sent successfully!');
//       console.log(result.text);
//     }, (error) => {
//       alert('There was an error sending your message. Please try again.');
//       console.log(error.text);
//     });

//     e.target.reset(); // Optional: clear form after submit
//   };

//   return (
//     <section id="work-with-us" className="work-with-us-section">
//       <h2>Work With Us</h2>
//       <p>Ready to bring your project to life? Fill out the form below.</p>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name*</label>
//         <input type="text" name="user_name" required />

//         <label>Email*</label>
//         <input type="email" name="user_email" required />

//         <label>Phone Number*</label>
//         <input type="tel" name="phone" required />

//         <label>Job Title</label>
//         <input type="text" name="job_title" />

//         <label>Company Name*</label>
//         <input type="text" name="company_name" required />

//         <label>Website</label>
//         <input type="url" name="company_website" />

//         <label>Company Description</label>
//         <textarea name="company_description" />

//         <hr />

//         <h3>How We Can Help :)</h3>

//         <label>What do you need?*</label>
//         <div className="checkbox-group">
//           <label><input type="checkbox" name="services" value="Website Ideation" /> Website Ideation</label>
//           <label><input type="checkbox" name="services" value="Website Dev" /> Website Dev</label>
//           <label><input type="checkbox" name="services" value="Hosting" /> Hosting</label>
//           <label><input type="checkbox" name="services" value="Creative Direction" /> Creative Direction</label>
//           <label><input type="checkbox" name="services" value="Logo & Visual Identity" /> Logo & Visual Identity</label>
//           <label><input type="checkbox" name="services" value="Website Maintenance" /> Website Maintenance</label>
//         </div>

//         <label>Estimated Budget</label>
//         <input type="text" name="budget" />

//         <label>Timeline</label>
//         <input type="text" name="timeline" />

//         <label>Anything Else?</label>
//         <textarea name="additional_info" />

//         <button type="submit">Send</button>
//       </form>
//     </section>
//   );
// }

// export default WorkWithUs;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./WorkWithUs.css";

function WorkWithUs() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m202v4f", // service ID
      "template_3jllpua", // template ID
      form.current,
      "Y4A5qny0IQyiRNSQf" // public key
    ).then(
      () => {
        setSubmitted(true);
        form.current.reset();
      },
      (error) => {
        console.error("FAILED...", error);
      }
    );
  };

  return (
    <section id="work-with-us" className="work-with-us-section">
      <div className="work-header">
        <h2 className="header-font">Work With Us</h2>
        <div className="quote-bubble">Get a quote!</div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form-layout">
        <h3>✿ Your Info ✿</h3>

        <label>Name*</label>
        <input type="text" name="name" required />

        <label>Email*</label>
        <input type="email" name="email" required />

        <label>Phone Number*</label>
        <input type="tel" name="phone" required />

        <label>Job Title</label>
        <input type="text" name="jobTitle" />

        <label>Company Name*</label>
        <input type="text" name="companyName" required />

        <label>Website</label>
        <input type="url" name="website" />

        <label>Company Description</label>
        <textarea name="companyDescription" />

        <h3>✿ How We Can Help ✿</h3>

        <label>What do you think you need?*</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="services" value="Website Ideation" /> Website Ideation</label>
          <label><input type="checkbox" name="services" value="Website Dev" /> Website Dev</label>
          <label><input type="checkbox" name="services" value="Hosting" /> Hosting</label>
          <label><input type="checkbox" name="services" value="Creative Direction" /> Creative Direction</label>
          <label><input type="checkbox" name="services" value="Logo & Visual Identity Design" /> Logo & Visual Identity Design</label>
          <label><input type="checkbox" name="services" value="Website Maintenance" /> Website Maintenance</label>
        </div>

        <label>Estimated Budget</label>
        <input type="text" name="budget" />

        <label>Timeline</label>
        <input type="text" name="timeline" />

        <label>Anything Else?</label>
        <textarea name="anythingElse" />

        <button type="submit">Submit</button>
        {submitted && <p className="thank-you">Thank you! We'll be in touch soon 💌</p>}
      </form>
    </section>
  );
}

export default WorkWithUs;
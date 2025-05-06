import React from "react";

function WorkWithUs() {
  return (
    <section className="work-with-us-section">
      <h2>Work With Us</h2>
      <p>Ready to bring your project to life? Fill out the form below, and we’ll get in touch to discuss how we can help you achieve your goals.</p>
      <form>
        <label htmlFor="project-name">Project Name</label>
        <input type="text" id="project-name" name="project-name" required />

        <label htmlFor="project-details">Project Details</label>
        <textarea id="project-details" name="project-details" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default WorkWithUs;
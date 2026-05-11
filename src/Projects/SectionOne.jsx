import React from "react";

function SectionOne() {
  return (
    <section className="projects home-hero about-hero" id="projects">
      <div className="hero-bg" />
      <div className="projects-text">
        <h1>Our Projects</h1>
        <p>
          Here you will find some of the most prominent projects we have worked
          on.
        </p>
        <div className="cta-buttons p-3 mt-3">
          <a href="https://github.com/el7asanyy" className="cta-button">
            For more projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;

import React from "react";

function SacandSection() {
  return (
    <div>
      <section className="home-showcase" id="showcase">
        <h2 className="section-title">Our Services</h2>
        <div className="home-hexagon-container">
          <div className="home-hexagon">
            <div className="home-hexagon-inner glass">
              <img
                className="home-hexagon-icon"
                src={"/img/IMG-20251107-WA0009.jpg"}
                alt="Corporate Website Design"
              />
              <h4>Corporate Website Design & Development</h4>
            </div>
          </div>
          <div className="home-hexagon">
            <div className="home-hexagon-inner glass">
              <img
                className="home-hexagon-icon"
                src={"/img/IMG-20251107-WA0007.jpg"}
                alt="E-commerce Development"
              />
              <h4>E-commerce Development</h4>
            </div>
          </div>
          <div className="home-hexagon">
            <div className="home-hexagon-inner glass">
              <img
                className="home-hexagon-icon"
                src={"/img/IMG-20251107-WA0005.jpg"}
                alt="Custom Web Applications"
              />
              <h4>Custom Web Applications (SaaS)</h4>
            </div>
          </div>
          <div className="home-hexagon">
            <div className="home-hexagon-inner glass">
              <img
                className="home-hexagon-icon"
                src={"/img/IMG-20251107-WA0008.jpg"}
                alt="Backend Development & APIs"
              />
              <h4>Backend Development & APIs</h4>
            </div>
          </div>
          <div className="home-hexagon">
            <div className="home-hexagon-inner glass">
              <img
                className="home-hexagon-icon"
                src={"/img/IMG-20251107-WA0006.jpg"}
                alt="UI/UX Design"
              />
              <h4>UI/UX Design</h4>
            </div>
          </div>
          <div className="home-hexagon">
            <div className="home-hexagon-inner glass">
              <img
                className="home-hexagon-icon"
                src={"/img/IMG-20251107-WA0010.jpg"}
                alt="Maintenance & Support"
              />
              <h4>Maintenance & Support Contracts</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SacandSection;

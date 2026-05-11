import React from "react";

function SectionOne() {
  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="geometric-shapes">
          <div className="shape shape1" />
          <div className="shape shape2" />
          <div className="shape shape3" />
          <div className="shape shape4" />
          <div className="shape shape5" />
          <div className="shape shape6" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Us</h1>
            <p>
              In a rapidly evolving digital landscape, we believe a powerful
              online presence is the cornerstone of any successful business.
              Electero Zone was founded to provide integrated solutions that
              combine brilliant design, robust engineering, and smart marketing
              strategies.
            </p>
          </div>
          <div className="hero-visual">
            <div className="city-container">
              <div className="building building1">
                <div className="building-fill" />
                <div className="building-windows" />
              </div>
              <div className="building building2">
                <div className="building-fill" />
                <div className="building-windows" />
              </div>
              <div className="building building3">
                <div className="building-fill" />
                <div className="building-windows" />
              </div>
              <div className="building building4">
                <div className="building-fill" />
                <div className="building-windows" />
              </div>
              <div className="neon-line neon-line1" />
              <div className="neon-line neon-line2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionOne;

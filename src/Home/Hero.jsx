import React from "react";

function Hero() {
  return (
    <div>
      <>
        {/* Section 1: Hero */}
        <section className="home-hero" id="home">
          <div className="home-hero-content">
            <div className="home-hero-subtitle">
              Powering Your Digital Future
            </div>
            <h1>Electero Zone</h1>
            <div className="home-hero-description">
              <p>
                Experts in Comprehensive Web Development. From engaging UI
                design to building robust backend systems.
              </p>
            </div>
            <div className="home-hero-stats">
              <div className="home-hero-stat">
                <span className="home-hero-stat-number">99.9%</span>
                <span className="home-hero-stat-label">Our Success Rate</span>
              </div>
              <div className="home-hero-stat">
                <span className="home-hero-stat-number">756</span>
                <span className="home-hero-stat-label">Clients</span>
              </div>
              <div className="home-hero-stat">
                <span className="home-hero-stat-number">0.1</span>
                <span className="home-hero-stat-label">Latency (ms)</span>
              </div>
              <div className="home-hero-stat">
                <span className="home-hero-stat-number">2006</span>
                <span className="home-hero-stat-label">Year of Birth</span>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/services" className="cta-button">
                Let's Create Your Site
              </a>
              <a href="/projects" className="cta-button secondary">
                Our Projects
              </a>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Hero;

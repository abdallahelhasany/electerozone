import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { fetchServices } from "../api/servicesApi";

function SectionOne() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  useEffect(() => {
    // Initialize Lucide icons after render
    const timer = setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [services]);

  const handleAddToCart = (service) => {
    addToCart(service);
    // Show notification (you can add a toast notification here)
    alert(`${service.name} added to cart!`);
  };

  if (loading) {
    return (
      <section
        className="services-section"
        style={{ padding: "150px 20px", textAlign: "center" }}
      >
        <div className="loading-spinner">Loading services...</div>
      </section>
    );
  }

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-subtitle">
          Choose from our comprehensive range of professional services
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-image"
                />
                <div className="service-category">{service.category}</div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  <h4>Features:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-meta">
                  <div className="service-duration">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{service.duration}</span>
                  </div>
                  <div className="service-price">
                    ${service.price.toLocaleString()}
                  </div>
                </div>

                <button
                  className="service-add-btn"
                  onClick={() => handleAddToCart(service)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;

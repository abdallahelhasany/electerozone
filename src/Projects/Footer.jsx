import React from "react";

function Footer() {
  return (
    <div>
      <>
        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/projects">Projects</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/documentation">Documentation</a>
              <a
                href="https://github.com/el7asanyy"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </div>
            <div className="footer-copyright">
              <p>
                © 2025 Electero Zone. All quantum rights reserved Abdallah
                Elhasany.
              </p>
            </div>
            <div className="footer-design">
              Developed by the company <a href="/">Electro</a>، Design:
              <a
                href="https://www.instagram.com/abdallahel7asany/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Abdallah Elhasany
              </a>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;

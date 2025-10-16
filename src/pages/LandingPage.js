// LandingPage.js
import React, { useEffect, useState } from "react";
import "../styles/main.scss";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <header>
        <div className="nav-bar">
          <div className="logo">
            <img src="images/Protozen Company Logo.png" alt="Company logo" />
          </div>

          <div className="nav-menu">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="right-header">
            <div className="hamburger" onClick={toggleMenu}>
              <div
                className={`hamburger-icon ${isMobileMenuOpen ? "active" : ""}`}
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="toggle-button">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider" />
              </label>
            </div>
          </div>

          <div className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="nav-menu-mobile">
              <a href="#home" className="active" onClick={closeMenu}>
                Home
              </a>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#products" onClick={closeMenu}>
                Products
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-section">
            <div className="hero-images-carousel">
              <div className="carousel-slide slide-1">
                <img src="images/Setup 12.jpg" alt="Security 1" />
              </div>
              <div className="carousel-slide slide-2">
                <img src="images/Slider 02.jpeg" alt="Security 2" />
              </div>
              <div className="carousel-slide slide-3">
                <img src="images/Slider 03.jpeg" alt="Security 3" />
              </div>

              <div className="hero-left">
                <p>
                  Enterprise Security
                  <span> Solutions</span>
                </p>
                <p className="hero-content">
                  Protecting organizations across UK and Pakistan with advanced
                  security services and cutting-edge threat detection systems.
                  Up to 90% reduction in security risks through AI-driven
                  platforms and expert implementation.
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-1">
          <p className="heading">Why Choose Us</p>
          <div className="section-1-container">
            <div className="section-1-card">
              <img src="images/image1.gif" alt="Expert Team" />
              <h2>Expert Team</h2>
              <p>
                Certified security professionals with 15+ years of combined
                experience serving organizations across the globe. Our team
                stays updated with latest security threats and countermeasures.
              </p>
            </div>
            <div className="section-1-card">
              <img src="images/image1.gif" alt="Global Coverage" />
              <h2>Global Coverage</h2>
              <p>
                Serving organizations across UK and Pakistan with localized
                support and round-the-clock monitoring. We understand regional
                compliance requirements and implement accordingly.
              </p>
            </div>
            <div className="section-1-card">
              <img src="images/image2.gif" alt="Proven Results" />
              <h2>Proven Results</h2>
              <p>
                99.8% threat detection rate with zero-compromise security
                standards. Our clients experience significant reduction in
                security incidents and faster response times.
              </p>
            </div>
          </div>
        </section>

        <section className="section-2" id="services">
          <div className="section-2-left">
            <p className="section-2-heading">
              Comprehensive Security Services for Modern Organizations
            </p>
            <button className="section-2-button">Learn More</button>
          </div>
          <div className="section-2-right">
            <video
              id="promoVideo"
              playsInline
              poster="images/poster.jpg"
              autoPlay
              muted
              loop
            >
              <source src="images/Setup Video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="section-3">
          <div className="section-3-container">
            <div className="section-3-left">
              <div className="section-3-left-header">
                <img src="images/image3.gif" alt="Statistics" />
                <h4>Risk Reduction</h4>
              </div>
              <img
                src="images/19333415.jpg"
                alt="stats image"
                className="section-3-mobile-img"
              />
              <p>
                Elevate your security strategy with our advanced threat
                detection, personalized risk assessment, and real-time
                monitoring. Go beyond traditional security and fortify
                organizational resilience through tailored solutions.
              </p>
              <div className="section-3-footer">
                <div className="section-3-footer-percentage">90%</div>
                <div className="section-3-footer-line" />
                <div className="section-3-footer-content">
                  Average risk reduction achieved by our clients
                </div>
              </div>
            </div>
            <div className="section-3-right">
              <img src="images/19333415.jpg" alt="Statistics visualization" />
            </div>
          </div>
        </section>

        <section className="section-4" id="products">
          <div className="section-4-heading">Our Solutions</div>
          <div className="section-4-container">
            <div className="section-4-left">
              <div className="section-4-header">
                <img
                  src="images/CCTV Monitoring.png"
                  alt="SecureNet Platform"
                />
              </div>
              <img
                src="images/Product 01.jpg"
                alt="SecureNet Platform"
                className="section-4-image"
              />
              <div className="section-4-content">
                <strong>SecureNet Platform:</strong> Real-time threat detection,
                network monitoring, automated incident response, and advanced
                analytics dashboard. Provides 24/7 protection with intelligent
                threat identification and immediate response mechanisms.
              </div>
              <button className="section-4-button">Learn More</button>
            </div>
            <div className="section-4-right">
              <div className="section-4-header">
                <img src="images/image4.png" alt="ThreatShield Pro" />
              </div>
              <img
                src="images/businessman-working-late-night.jpg"
                alt="ThreatShield Training"
                className="section-4-image"
              />
              <div className="section-4-content">
                <strong>ThreatShield Pro:</strong> Employee security awareness
                training, phishing simulations, risk scoring system, and
                compliance reporting. Educates teams on emerging threats while
                maintaining detailed audit trails for regulatory compliance.
              </div>
              <button className="section-4-button">Learn More</button>
            </div>
          </div>
        </section>

        <section className="section-team" id="about">
          <div className="team-container">
            <p className="team-heading">Our Team</p>
            <p className="team-description">
              Meet the dedicated professionals behind our security services.
              With combined expertise in enterprise security, risk management,
              and digital protection, our team is committed to safeguarding your
              organization's most critical assets.
            </p>

            <div className="ceo-card">
              <img
                src="images/ceo-image.jpg"
                alt="CEO Name"
                className="ceo-image"
              />
              <div className="ceo-info">
                <h3>CEO Name</h3>
                <p className="ceo-title">Chief Executive Officer</p>
                <p className="ceo-bio">
                  With over 15 years of experience in cybersecurity and
                  enterprise risk management, our CEO leads the vision of
                  providing world-class security solutions to organizations
                  globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-contact-cards" id="contact">
          <div className="contact-cards-container">
            <p className="contact-heading">Get In Touch</p>

            <div className="contact-cards-grid">
              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <i className="fas fa-envelope" />
                </div>
                <h3>Email</h3>
                <p>contact@company.com</p>
                <a
                  href="mailto:contact@company.com"
                  className="contact-card-link"
                >
                  Send Email
                </a>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <i className="fas fa-phone" />
                </div>
                <h3>Phone</h3>
                <p>+44 (0) 207 183 8750</p>
                <a href="tel:+442071838750" className="contact-card-link">
                  Call Us
                </a>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <i className="fab fa-linkedin" />
                </div>
                <h3>LinkedIn</h3>
                <p>Connect with us</p>
                <a
                  href="https://linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link"
                >
                  Visit LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-section">
          <div className="footer-section-content">
            <div className="column-left">
              <div className="logo-1">
                <img
                  src="images/Protozen Company Logo.png"
                  alt="Company logo"
                />
              </div>
              <p>
                Protecting organizations worldwide with enterprise-grade
                security solutions. Contact us today to discuss your security
                needs and discover how we can help safeguard your business.
              </p>
            </div>
            <div className="column-center">
              <p className="footer-nav-heading">Quick Links</p>
              <div className="footer-nav-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="column-right">
              <p className="footer-nav-heading">Contact</p>
              <div className="footer-nav-menu-contact">
                <a href="tel:+442071838750">+44 (0) 207 183 8750</a>
                <a href="mailto:contact@company.com">contact@company.com</a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="footer-section-base">
            <p>© 2025 Protozen's Security Services. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

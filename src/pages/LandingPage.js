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
            <a href="#whychooseus">Why Choose Us</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#team">Our Team</a>
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
              <a href="#whychooseus" onClick={closeMenu}>
                Why Choose Us
              </a>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#products" onClick={closeMenu}>
                Products
              </a>
              <a href="#team" onClick={closeMenu}>
                Our Team
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
                  24/7 Remote <span>Security</span> Monitoring & Smart{" "}
                  <span>IoT</span> Integration
                </p>
                <p className="hero-content">
                  Protozen’s Technologies delivers intelligent, real-time remote
                  CCTV monitoring and IoT-enabled operations monitoring through
                  our 24/7 Remote Security Operations Centres in UK and Pakistan
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

        <section className="section-1" id="whychooseus">
          <p className="heading">Why Choose Us</p>
          <div className="section-1-container">
            <div className="section-1-card">
              <img src="images/247 Services.png" alt="24/7 Services" />
              <h2>24/7 Live Monitoring & Immediate Response</h2>
              <p>
                Our remote security and operations teams operate in three global
                shifts to ensure continuous surveillance and incident response,
                365 days a year. You are protected at all times, every day of
                the year.
              </p>
            </div>
            <div className="section-1-card">
              <img
                src="images/Operations Monitoring.png"
                alt="Operations Monitoring & Control"
              />
              <h2>Operations Monitoring & Control</h2>
              <p>
                We go beyond CCTV monitoring either you need to remote control
                of doors, lights, or sensors we develop custom IoT devices for
                your operations monitoring and control as per your requirements.
              </p>
            </div>
            <div className="section-1-card">
              <img src="images/cost efficiency.png" alt="Cost Efficiency" />
              <h2>Cost Efficiency</h2>
              <p>
                Our Remote Security Operations Centre helps you reduce security
                and operations costs by up to 70%, replacing traditional
                staffing with intelligent, scalable monitoring.
              </p>
            </div>
            <div className="section-1-card">
              <img src="images/Global Presence.png" alt="Global Presence" />
              <h2>Global Presence</h2>
              <p>
                With operations centres in both the United Kingdom and Pakistan,
                we provide scalable support, localized response, and true
                around-the-clock coverage for global clients.
              </p>
            </div>
            <div className="section-1-card">
              <img
                src="images/Seamless Integration.png"
                alt="Seamless Integration"
              />
              <h2>Seamless Integration</h2>
              <p>
                Our services integrate smoothly with your existing systems,
                providing a hassle-free transition and immediate impact.
              </p>
            </div>
          </div>
        </section>

        <section className="section-2" id="about">
          <div className="section-2-left">
            <p className="section-2-heading">About</p>
            <p className="section-2-content">
              At Protozens Technologies, we provide 24/7 remote security
              monitoring and smart IoT-based operations control for businesses
              across the UK, Europe, and beyond. Our Remote Security Operations
              Center teams monitor CCTV, respond to incidents in real time, and
              integrate custom-built sensors and devices to secure and automate
              your environment. With dual operations centers in the UK and
              Pakistan, we deliver continuous coverage, proactive protection,
              and significant cost savings, all tailored to your industry and
              infrastructure.
            </p>
          </div>
          <div className="section-2-right">
            <video id="promoVideo" playsInline autoPlay muted loop>
              <source src="images/Setup Video 01.mp4" type="video/mp4" />
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
                src="images/Intruder Protection.jpg"
                alt="Intruder Protection"
                className="section-3-mobile-img"
              />
              <p>
                We help businesses reduce security risks and improve operations
                with 24/7 remote monitoring and real-time alerts. Our Remote
                Security Operations Centre teams quickly detect and respond to
                threats, while our smart IoT solutions allow remote control and
                monitoring of your environment based on your unique needs.
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
              <img
                src="images/Intruder Protection.jpg"
                alt="Intruder Protection"
              />
            </div>
          </div>
        </section>

        <section className="section-4" id="products">
          <div className="section-4-heading">Our Solutions</div>
          <div className="section-4-container">
            <div className="section-4-left">
              <div className="section-4-header">
                <img src="images/CCTV Monitoring.png" alt="CCTV Monitoring" />
              </div>
              <img
                src="images/Product 01.jpg"
                alt="SecureNet Platform"
                className="section-4-image"
              />
              <div className="section-4-content">
                <strong>Remote Security Monitoring:</strong> We provide 24/7
                live CCTV monitoring of your premises through our global Remote
                Security Operations Centres. Our trained agents detect threats
                in real time, communicate with your team, and trigger audio
                deterrents when needed. Every event is logged and reported to
                keep you fully informed and in control.
              </div>
              <button
                className="section-4-button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </button>
            </div>
            <div className="section-4-right">
              <div className="section-4-header">
                <img
                  src="images/IoT Protection Devices.png"
                  alt="IoT Protection Devices"
                />
              </div>
              <img
                src="images/IoT Devices.jpg"
                alt="ThreatShield Training"
                className="section-4-image"
              />
              <div className="section-4-content">
                <strong>Custom IoT for Security Operations:</strong> We design
                and deploy smart IoT devices to help you monitor and control
                your environment remotely. From sensors and emergency triggers
                to smart relays and automated systems, our custom-built
                solutions integrate directly into your security operations and
                help you respond faster and smarter.
              </div>
              <a
                href="https://protozens.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="section-4-button"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="section-team" id="team">
          <div className="team-container">
            <p className="team-heading">Our Team</p>
            <p className="team-description">
              At Protozen’s, our strength lies in our people. Our team of
              security professionals, IoT engineers, and monitoring specialists
              work together to protect your operations around the clock. Every
              client engagement is backed by technical depth, operational
              discipline, and a genuine commitment to safety and innovation
            </p>

            <div className="ceo-card">
              <img
                src="images/Abduur Rehman Akhtar.png"
                alt="CEO Name"
                className="ceo-image"
              />
              <div className="ceo-info">
                <h3>Abdur Rehman Akhtar</h3>
                <p className="ceo-title">Chief Executive Officer</p>
                <p className="ceo-bio">
                  Abdurrehman Akhtar is a robotics and IoT engineer with over a
                  decade of experience in smart systems, embedded security,
                  automation and security monitoring. As the founder of
                  Protozen’s, he leads the company’s vision to deliver
                  intelligent remote monitoring solutions that combine human
                  oversight with advanced technology. His background in
                  mechatronics, AI, and embedded design shapes the innovation
                  that powers Protozen’s Remote Security Operations Centre and
                  IoT services.
                </p>
              </div>
            </div>
            <div className="managers-section">
              <p className="managers-heading">Leadership Team</p>
              <div className="managers-grid">
                <div className="manager-card">
                  <img
                    src="images/Abdullah Akhtar.png"
                    alt="Manager 1"
                    className="manager-image"
                  />
                  <h4>Abdullah Akhtar</h4>
                  <p className="manager-designation">
                    Operations Manager Pakistan
                  </p>
                </div>

                <div className="manager-card">
                  <img
                    src="images/IMG_6855.jpg"
                    alt="Manager 2"
                    className="manager-image"
                  />
                  <h4>Waheed Afridi</h4>
                  <p className="manager-designation">
                    Operations Manager United Kingdom
                  </p>
                </div>

                <div className="manager-card">
                  <img
                    src="images/Hasnain Yaseen.jpeg"
                    alt="Manager 3"
                    className="manager-image"
                  />
                  <h4>Hasnain Yaseen</h4>
                  <p className="manager-designation">IT & Support Manager</p>
                </div>
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
                <p>contact@protozens.com</p>
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
                <p>+44 (0) 744 051 5186</p>
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
                  href="https://www.linkedin.com/company/protozen/"
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
                <a href="#whychooseus">Why Choose Us</a>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#team">Our Team</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="column-right">
              <p className="footer-nav-heading">Contact</p>
              <div className="footer-nav-menu-contact">
                <a href="tel:+442071838750">+44 (0) 744 051 5186</a>
                <a href="mailto:contact@company.com">contact@protozens.com</a>
                <a
                  href="https://www.linkedin.com/company/protozen/"
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

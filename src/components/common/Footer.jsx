import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import logo from "../../assets/logo.png";
import "../../styles/global.css";

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <button
            className="footer-logo"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="NUVIQ AI LABS"
            />
          </button>

          <p>
            NUVIQ AI LABS is a software development company building
            modern websites, custom software, business applications,
            and practical technology solutions.
          </p>

          <button
            className="footer-start-button"
            onClick={() => scrollToSection("contact")}
          >
            Start a Project
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>Navigation</h3>

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("why-us")}>
            Why Us
          </button>

          <button onClick={() => scrollToSection("training")}>
            Training
          </button>

          <button onClick={() => scrollToSection("technologies")}>
            Technologies
          </button>

          <button onClick={() => scrollToSection("reviews")}>
            Reviews
          </button>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Services</h3>

          <button onClick={() => scrollToSection("services")}>
            Web Development
          </button>

          <button onClick={() => scrollToSection("services")}>
            Custom Software
          </button>

          <button onClick={() => scrollToSection("services")}>
            CRM Software
          </button>

          <button onClick={() => scrollToSection("services")}>
            Billing Software
          </button>

          <button onClick={() => scrollToSection("services")}>
            E-commerce
          </button>

          <button onClick={() => scrollToSection("services")}>
            AI & Machine Learning
          </button>

          <button onClick={() => scrollToSection("services")}>
            App Development
          </button>

          <button onClick={() => scrollToSection("services")}>
            Digital Marketing
          </button>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          {/* PHONE */}
          <a href="tel:+918838096220">
            <Phone size={16} />
            <span>+91 88380 96220</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/918838096220"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          {/* EMAIL */}
          <a href="mailto:nuviqailabs@gmail.com">
            <Mail size={16} />
            <span>nuviqailabs@gmail.com</span>
          </a>

          {/* ADDRESS */}
          <div className="footer-address">
            <MapPin size={16} />

            <span>
              No. 158, Kamarajar Road,
              Arakandanallur,
              Villupuram District,
              Tamil Nadu 605752
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} NUVIQ AI LABS.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <button onClick={() => scrollToSection("home")}>
              Privacy
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
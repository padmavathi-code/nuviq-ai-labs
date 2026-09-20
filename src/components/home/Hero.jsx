import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Code2 } from "lucide-react";
import logo from "../../assets/logo.png";
import "../../styles/global.css";

function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918838096220?text=Hello%20NUVIQ%20AI%20LABS,%20I%20would%20like%20to%20discuss%20a%20project.",
      "_blank"
    );
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-gold"></div>
        <div className="hero-orb hero-orb-blue"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            className="hero-brand"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img src={logo} alt="NUVIQ AI LABS" />
          </motion.div>

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Code2 size={16} />
            SOFTWARE DEVELOPMENT & TECHNOLOGY SOLUTIONS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            We Build
            <span> Digital Solutions </span>
            That Move Businesses Forward.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            NUVIQ AI LABS develops modern websites, custom software,
            web applications, CRM systems, billing solutions, e-commerce
            platforms, and innovative technology solutions.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <button className="primary-button" onClick={openWhatsApp}>
              Get a Project Quote
              <ArrowRight size={18} />
            </button>

            <button
              className="secondary-button"
              onClick={scrollToProjects}
            >
              View Our Work
            </button>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <span></span>
            <p>Web Development</p>
            <span></span>
            <p>Custom Software</p>
            <span></span>
            <p>Full Stack Solutions</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="visual-card">
            <div className="visual-top">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="visual-label">NUVIQ / DIGITAL LAB</div>
            </div>

            <div className="visual-code">
              <div className="code-line short"></div>
              <div className="code-line"></div>
              <div className="code-line medium"></div>
              <div className="code-line short"></div>
              <div className="code-line long"></div>
              <div className="code-line medium"></div>
            </div>

            <div className="visual-center">
              <div className="visual-infinity">∞</div>
              <strong>BUILD. INNOVATE. DELIVER.</strong>
              <small>Technology solutions for modern businesses</small>
            </div>

            <div className="visual-bottom">
              <div>
                <strong>Web</strong>
                <span>Development</span>
              </div>

              <div>
                <strong>Software</strong>
                <span>Solutions</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Technology</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;
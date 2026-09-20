import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Users, Award } from "lucide-react";
import "../../styles/global.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <div className="about-grid">

          {/* LEFT CONTENT */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">ABOUT US</span>

            <h2>
              About NUVIQ <span>AI LABS</span>
            </h2>

            <p className="about-text">
              NUVIQ AI LABS is a software development company specializing in
              web development, custom software, full-stack development,
              business applications, and modern technology solutions.
            </p>

            <p className="about-text">
              We build practical digital solutions that help businesses
              improve their workflow, connect with customers, and grow using
              modern technologies.
            </p>

            <button
              className="about-button"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Learn More
              <ArrowUpRight size={17} />
            </button>
          </motion.div>

          {/* RIGHT IMAGE / VISUAL */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-card">
              <div className="about-image-glow"></div>

              <div className="about-laptop">
                <Code2 size={48} />
                <span>NUVIQ AI LABS</span>
                <small>BUILD • INNOVATE • DELIVER</small>
              </div>
            </div>
          </motion.div>

        </div>

        {/* STATISTICS */}
        <div className="about-stats">

          <motion.div
            className="about-stat-card"
            whileHover={{ y: -5 }}
          >
            <Code2 size={25} />
            <strong>10+</strong>
            <span>Projects Completed</span>
          </motion.div>

          <motion.div
            className="about-stat-card"
            whileHover={{ y: -5 }}
          >
            <Users size={25} />
            <strong>5+</strong>
            <span>Technologies</span>
          </motion.div>

          <motion.div
            className="about-stat-card"
            whileHover={{ y: -5 }}
          >
            <Award size={25} />
            <strong>100%</strong>
            <span>Client Focus</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
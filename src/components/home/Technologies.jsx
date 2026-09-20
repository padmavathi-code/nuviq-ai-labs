import { motion } from "framer-motion";
import {
  Code2,
  FileCode2,
  Braces,
  Database,
  Server,
  Brain,
  Smartphone,
  GitBranch,
} from "lucide-react";

import "../../styles/global.css";

const technologies = [
  {
    icon: Code2,
    name: "HTML5",
    category: "Frontend",
  },
  {
    icon: FileCode2,
    name: "CSS3",
    category: "Frontend",
  },
  {
    icon: Braces,
    name: "JavaScript",
    category: "Programming",
  },
  {
    icon: Braces,
    name: "React",
    category: "Frontend",
  },
  {
    icon: Code2,
    name: "Python",
    category: "Programming",
  },
  {
    icon: Code2,
    name: "Java",
    category: "Programming",
  },
  {
    icon: Server,
    name: "Node.js",
    category: "Backend",
  },
  {
    icon: Database,
    name: "MySQL",
    category: "Database",
  },
  {
    icon: Database,
    name: "MongoDB",
    category: "Database",
  },
  {
    icon: Brain,
    name: "AI / ML",
    category: "Artificial Intelligence",
  },
  {
    icon: Smartphone,
    name: "App Development",
    category: "Mobile",
  },
  {
    icon: GitBranch,
    name: "Git & GitHub",
    category: "Development",
  },
];

function Technologies() {
  return (
    <section className="technologies-section" id="technologies">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          className="technologies-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            TECHNOLOGIES
          </span>

          <h2>
            Technologies We <span>Work With</span>
          </h2>

          <p>
            We use modern and industry-relevant technologies to build
            reliable, scalable, and high-performance digital solutions.
          </p>
        </motion.div>

        {/* TECHNOLOGY GRID */}
        <div className="technologies-grid">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                className="technology-card"
                key={technology.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
              >
                <div className="technology-icon">
                  <Icon size={27} />
                </div>

                <div className="technology-info">
                  <h3>{technology.name}</h3>

                  <span>{technology.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TECHNOLOGY BOTTOM MESSAGE */}
        <motion.div
          className="technology-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>
            MODERN TECHNOLOGY
          </span>

          <div className="technology-bottom-line"></div>

          <span>
            PRACTICAL SOLUTIONS
          </span>

          <div className="technology-bottom-line"></div>

          <span>
            FUTURE READY
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Technologies;
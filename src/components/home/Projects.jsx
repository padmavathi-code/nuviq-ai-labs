import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Users,
  Receipt,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import "../../styles/global.css";

const projects = [
  {
    icon: Globe,
    category: "WEB DEVELOPMENT",
    title: "Business Website",
    description:
      "Modern responsive business website designed to create a professional online presence.",
  },
  {
    icon: ShoppingCart,
    category: "E-COMMERCE",
    title: "E-commerce Website",
    description:
      "Complete online shopping platform with products, customers, orders, and payment features.",
  },
  {
    icon: Users,
    category: "CRM SOFTWARE",
    title: "CRM Management System",
    description:
      "Business CRM solution for managing customers, leads, follow-ups, and business activities.",
  },
  {
    icon: Receipt,
    category: "BILLING SOFTWARE",
    title: "Billing Management System",
    description:
      "Professional billing software for invoices, products, customers, payments, and reports.",
  },
  {
    icon: Code2,
    category: "CUSTOM SOFTWARE",
    title: "Custom Business Software",
    description:
      "Custom-built software applications developed according to specific business requirements.",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        {/* SECTION HEADER */}
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            OUR PROJECTS
          </span>

          <h2>
            Solutions We <span>Build</span>
          </h2>

          <p>
            Explore some of the digital solutions and software applications
            we create for businesses and organizations.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="projects-grid">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                className="project-card"
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                {/* PROJECT VISUAL */}
                <div className="project-image">

                  <div className="project-glow"></div>

                  <div className="project-screen">
                    <Icon size={42} />

                    <span>
                      NUVIQ AI LABS
                    </span>

                    <small>
                      {project.category}
                    </small>
                  </div>

                </div>

                {/* PROJECT CONTENT */}
                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <button
                    className="project-button"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                  >
                    Discuss Project
                    <ArrowUpRight size={16} />
                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Projects;
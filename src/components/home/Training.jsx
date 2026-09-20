import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Brain,
  Database,
  BriefcaseBusiness,
  Award,
  ArrowUpRight,
} from "lucide-react";

import "../../styles/global.css";

const programs = [
  {
    icon: Code2,
    title: "Python Programming",
    description:
      "Learn Python fundamentals, programming concepts, projects, and practical development.",
  },
  {
    icon: Code2,
    title: "Java Programming",
    description:
      "Build a strong foundation in Java programming and application development.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Full Stack Development",
    description:
      "Learn frontend, backend, database, APIs, and complete web application development.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Understand AI concepts and develop practical intelligent applications.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Learn machine learning concepts, models, data processing, and practical projects.",
  },
  {
    icon: Database,
    title: "Web & Database",
    description:
      "Learn modern web technologies, databases, APIs, and application development.",
  },
];

function Training() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="training-section" id="training">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          className="training-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            TRAINING & INTERNSHIP
          </span>

          <h2>
            Learn. <span>Build. Grow.</span>
          </h2>

          <p>
            Practical technology training and internship programs designed
            to help students and aspiring developers build real-world
            technical skills.
          </p>
        </motion.div>

        {/* MAIN TRAINING CARD */}
        <motion.div
          className="training-main-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="training-main-content">

            <div className="training-icon-large">
              <GraduationCap size={34} />
            </div>

            <span className="training-mini-label">
              PROFESSIONAL PROGRAMS
            </span>

            <h3>
              Build Real-World
              <span> Technology Skills</span>
            </h3>

            <p>
              Our training and internship programs focus on practical
              learning, project development, technical skills, and
              industry-relevant technologies.
            </p>

            <button
              className="training-button"
              onClick={scrollToContact}
            >
              Join a Program
              <ArrowUpRight size={17} />
            </button>

          </div>

          <div className="training-main-visual">
            <div className="training-glow"></div>

            <div className="training-screen">

              <div className="screen-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="screen-code">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="screen-brand">
                NUVIQ AI LABS
              </div>

            </div>
          </div>
        </motion.div>

        {/* PROGRAMS */}
        <div className="training-grid">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                className="training-card"
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="training-card-icon">
                  <Icon size={24} />
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <div className="training-card-line"></div>
              </motion.div>
            );
          })}

        </div>

        {/* INTERNSHIP STRIP */}
        <motion.div
          className="internship-strip"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="internship-item">
            <Award size={22} />
            <div>
              <strong>Project-Based Learning</strong>
              <span>Work on practical projects</span>
            </div>
          </div>

          <div className="internship-item">
            <BriefcaseBusiness size={22} />
            <div>
              <strong>Internship Programs</strong>
              <span>Gain practical experience</span>
            </div>
          </div>

          <div className="internship-item">
            <Code2 size={22} />
            <div>
              <strong>Industry Skills</strong>
              <span>Learn relevant technologies</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Training;
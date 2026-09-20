import { motion } from "framer-motion";

import {
  ShieldCheck,
  Zap,
  Users,
  Headphones,
  Code2,
  Target,
} from "lucide-react";

import "../../styles/global.css";

const reasons = [
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use modern technologies and development practices to build reliable digital solutions.",
  },
  {
    icon: Target,
    title: "Business Focused",
    description:
      "Our solutions are designed around real business requirements and practical goals.",
  },
  {
    icon: Zap,
    title: "Fast Development",
    description:
      "We follow an organized development process to deliver projects efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Solutions",
    description:
      "We focus on clean, scalable, secure, and maintainable software solutions.",
  },
  {
    icon: Users,
    title: "Client Collaboration",
    description:
      "We work closely with clients throughout the development process.",
  },
  {
    icon: Headphones,
    title: "Support & Guidance",
    description:
      "We provide technical guidance and support even after project delivery.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Built For Your <span>Success</span>
          </h2>

          <p>
            We combine technology, creativity, and practical business
            understanding to create solutions that deliver real value.
          </p>
        </motion.div>

        {/* REASONS */}
        <div className="why-grid">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                className="why-card"
                key={reason.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <div className="why-icon">
                  <Icon size={25} />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

                <div className="why-line"></div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
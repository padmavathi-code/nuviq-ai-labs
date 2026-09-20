import { motion } from "framer-motion";

import {
  Globe,
  Settings,
  Users,
  Receipt,
  ShoppingCart,
  Layers,
  Brain,
  Smartphone,
  Megaphone,
  Search,
} from "lucide-react";

import "../../styles/global.css";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications for businesses.",
  },
  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Tailored software solutions designed around your business needs.",
  },
  {
    icon: Users,
    title: "CRM Software",
    description:
      "Customer relationship management systems to manage your business.",
  },
  {
    icon: Receipt,
    title: "Billing Software",
    description:
      "Smart invoicing and payment management solutions for businesses.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Online stores and complete e-commerce solutions for your business.",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Frontend and backend development for complete digital solutions.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent technology solutions powered by AI and machine learning.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Modern mobile applications for Android, iOS, and business needs.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Digital marketing solutions to increase your online presence and reach.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Search engine optimization to improve visibility and organic traffic.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">

        {/* SECTION HEADER */}
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            OUR SERVICES
          </span>

          <h2>
            Complete <span>Technology Solutions</span>
          </h2>

          <p>
            We provide end-to-end software development, digital marketing,
            and technology solutions to help your business grow and succeed.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                className="service-card"
                key={service.title}
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
              >

                {/* ICON */}
                <div className="service-icon">
                  <Icon size={25} />
                </div>

                {/* TITLE */}
                <h3>
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p>
                  {service.description}
                </p>

                {/* ARROW */}
                <div className="service-arrow">
                  <span>+</span>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;
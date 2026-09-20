import { motion } from "framer-motion";

import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import "../../styles/global.css";

function Contact() {
  const whatsappNumber = "918838096220";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello NUVIQ AI LABS, I would like to discuss a project."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const whatsappMessage = encodeURIComponent(
      `Hello NUVIQ AI LABS,

Name: ${name}
Email: ${email}
Phone: ${phone}

Project Requirement:
${message}`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="section-container">

        {/* CTA */}
        <motion.div
          className="contact-cta"
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
            duration: 0.7,
          }}
        >
          <div className="contact-cta-glow"></div>

          <span className="section-label">
            LET'S BUILD SOMETHING
          </span>

          <h2>
            Ready to Start Your{" "}
            <span>Project?</span>
          </h2>

          <p>
            Tell us about your idea, business requirement,
            or technology project. Our team can help you
            turn it into a practical digital solution.
          </p>

          <div className="contact-cta-buttons">

            <button
              className="contact-primary-button"
              onClick={openWhatsApp}
            >
              Start a Conversation
              <MessageCircle size={18} />
            </button>

            <a
              href="tel:+918838096220"
              className="contact-secondary-button"
            >
              Call Us
              <Phone size={17} />
            </a>

          </div>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="contact-grid">

          {/* CONTACT INFORMATION */}
          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="section-label">
              CONTACT US
            </span>

            <h2>
              Let's Talk About Your{" "}
              <span>Project</span>
            </h2>

            <p className="contact-description">
              Whether you need a business website,
              custom software, CRM, billing system,
              e-commerce platform, or technology training,
              we're ready to discuss your requirements.
            </p>

            <div className="contact-details">

              {/* PHONE */}
              <a
                href="tel:+918838096220"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    +91 88380 96220
                  </strong>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/918838096220"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>
                    +91 88380 96220
                  </strong>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:nuviqailabs@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span>Email</span>

                  <strong>
                    nuviqailabs@gmail.com
                  </strong>
                </div>
              </a>

              {/* ADDRESS */}
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <span>Location</span>

                  <strong>
                    No. 158, Kamarajar Road,
                    Arakandanallur,
                    Villupuram District,
                    Tamil Nadu 605752
                  </strong>
                </div>
              </div>

            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            className="contact-form-card"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="contact-form-header">
              <h3>
                Send Us a Message
              </h3>

              <p>
                Share your project requirements with us.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}
              <div className="contact-form-row">

                <div className="contact-input-group">
                  <label>
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>

              </div>

              {/* PHONE */}
              <div className="contact-input-group">
                <label>
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="contact-input-group">
                <label>
                  Project Requirement
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit-button"
              >
                Send via WhatsApp
                <Send size={17} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
import { motion } from "framer-motion";
import {
  Star,
  ExternalLink,
  MessageSquareQuote,
} from "lucide-react";
import "../../styles/global.css";

function Reviews() {
  const googleReviewUrl =
    "https://g.page/r/CeZQEe4y9BlIEAE/review";

  return (
    <section className="reviews-section" id="reviews">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="reviews-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">CUSTOMER REVIEWS</span>

          <h2>
            What Our <span>Customers Say</span>
          </h2>

          <p>
            Customer feedback helps us continuously improve the quality
            of our software development, technology solutions, and
            training services.
          </p>
        </motion.div>

        {/* Main Review Card */}
        <motion.div
          className="reviews-main-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Rating */}
          <div className="reviews-rating-area">

            <div className="google-icon">
              <span className="google-letter">G</span>
            </div>

            <div className="rating-number">
              5.0
            </div>

            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="rating-label">
              Google Reviews
            </span>

            <span className="review-count">
              4 Customer Reviews
            </span>
          </div>

          {/* Review Content */}
          <div className="reviews-content">

            <MessageSquareQuote
              className="review-quote-icon"
              size={42}
            />

            <h3>
              Your Feedback Matters
            </h3>

            <p>
              We value every customer experience. Your feedback helps
              NUVIQ AI LABS continue building better websites, software,
              business applications, and technology solutions.
            </p>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-button"
            >
              Read Reviews on Google
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        {/* Information Cards */}
        <div className="review-info-grid">

          <motion.div
            className="review-info-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="review-info-icon">
              <Star size={23} />
            </div>

            <h3>5.0 Rating</h3>

            <p>
              Our Google Business Profile currently shows a 5.0 customer
              rating.
            </p>
          </motion.div>

          <motion.div
            className="review-info-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="review-info-icon">
              <MessageSquareQuote size={23} />
            </div>

            <h3>Customer Feedback</h3>

            <p>
              We appreciate feedback from customers who work with our
              technology solutions.
            </p>
          </motion.div>

          <motion.div
            className="review-info-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            whileHover={{ y: -6 }}
          >
            <div className="review-info-icon google-card-icon">
              <span>G</span>
            </div>

            <h3>Google Reviews</h3>

            <p>
              Visit our Google Business Profile to see customer feedback
              and share your experience.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Reviews;
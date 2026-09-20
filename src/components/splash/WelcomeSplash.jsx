import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import "../../styles/animations.css";

function WelcomeSplash({ onComplete }) {
  return (
    <motion.div
      className="welcome-splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2500);
      }}
    >
      <div className="splash-glow splash-glow-left"></div>
      <div className="splash-glow splash-glow-right"></div>

      <motion.div
        className="splash-content"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="NUVIQ AI LABS"
          className="splash-logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div
          className="splash-line"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "180px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="splash-welcome"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          WELCOME TO OUR COMPANY WEBSITE
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default WelcomeSplash;
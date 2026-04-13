import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AtomScene from "./AtomScene";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <AtomScene />
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-badge"
        >
          <span className="hero-badge-dot" />
          SCHOOL OF SCIENCES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hero-title"
        >
          Explore. Discover.{" "}
          <span className="hero-title-italic">Innovate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hero-description"
        >
          EULIM Science Club — Where curiosity meets discovery and the next generation of scientists is born.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="hero-actions"
        >
          <Link to="/about" className="hero-btn-primary">
            Learn More
          </Link>
          <Link to="/activities" className="hero-btn-secondary">
            Our Activities
          </Link>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("photo-collage")?.scrollIntoView({ behavior: "smooth" })}
        className="hero-scroll-btn"
        aria-label="Scroll to gallery"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}

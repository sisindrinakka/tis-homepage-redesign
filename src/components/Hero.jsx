import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={15} />
          <span>LEARN · LEAD · INSPIRE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Where
          <br />
          <span>Tomorrow's</span>
          <br />
          Leaders Begin.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Discover a world of learning, exploration, and
          endless possibilities at Tulas International School,
          Dehradun.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="#admissions" className="btn-primary">
            Explore Admissions
            <ArrowUpRight size={18} />
          </a>

          <a href="#about" className="btn-secondary">
            Discover Tulas
          </a>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <div className="hero-location">
          <span className="location-dot"></span>
          DEHRADUN, INDIA
        </div>

        <a href="#about" className="scroll-indicator">
          SCROLL TO EXPLORE
          <ArrowDown size={16} />
        </a>

        <div className="hero-year">EST. 2013</div>
      </div>
    </section>
  );
}

export default Hero;
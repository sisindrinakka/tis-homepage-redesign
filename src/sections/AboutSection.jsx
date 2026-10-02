import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left Side - Image */}
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
            alt="Students learning in a classroom"
            className="about-image"
          />

          <div className="about-image-label">
            <span>01</span>
            <p>Learning beyond classrooms</p>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ABOUT TULAS</p>

          <h2>
            Education that shapes
            <span> tomorrow.</span>
          </h2>

          <p className="about-description">
            Tulas International School is committed to creating an inspiring
            learning environment where students can discover their strengths,
            develop confidence and prepare for a changing world.
          </p>

          <p className="about-description">
            Our approach brings together academics, creativity, collaboration
            and opportunities beyond the classroom to help every student grow.
          </p>

          <a href="#academics" className="text-link">
            Discover our approach
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection
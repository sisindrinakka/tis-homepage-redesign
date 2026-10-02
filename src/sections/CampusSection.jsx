import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const CampusSection = () => {
  return (
    <section className="campus-section" id="campus">
      <div className="campus-container">

        {/* Heading */}
        <motion.div
          className="campus-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">OUR CAMPUS</p>

          <h2>
            Space to explore
            <span> every possibility.</span>
          </h2>

          <p>
            A thoughtfully designed environment where learning,
            creativity and student life come together.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          className="campus-main-image"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1400&q=80"
            alt="Modern school campus"
          />

          <div className="campus-image-overlay">
            <span>EXPLORE</span>
            <ArrowUpRight size={22} />
          </div>
        </motion.div>

        {/* Facilities */}
        <div className="facility-grid">

          {/* Facility 1 */}
          <motion.div
            className="facility-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span></span>

            <h3>Learning Spaces</h3>

            <p>
              Purposeful spaces designed to support focused learning,
              collaboration and creativity.
            </p>
          </motion.div>

          {/* Facility 2 */}
          <motion.div
            className="facility-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span></span>

            <h3>Activity Areas</h3>

            <p>
              Dedicated environments where students can discover
              interests and develop new skills.
            </p>
          </motion.div>

          {/* Facility 3 */}
          <motion.div
            className="facility-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span></span>

            <h3>Student Life</h3>

            <p>
              An engaging campus experience that encourages
              connection, participation and personal growth.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default CampusSection
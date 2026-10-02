import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const AcademicsSection = () => {
  return (
    <section className="academics-section" id="academics">
      <div className="academics-container">

        {/* Top Heading */}
        <motion.div
          className="academics-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ACADEMICS</p>

          <h2>
            Learning beyond
            <span> boundaries.</span>
          </h2>

          <p className="academics-intro">
            We create meaningful learning experiences that encourage
            curiosity, creativity, collaboration and independent thinking.
          </p>
        </motion.div>

        {/* Academic Cards */}
        <div className="academic-cards">

          {/* Card 1 */}
          <motion.div
            className="academic-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="academic-number"></span>

            <h3>Academic Excellence</h3>

            <p>
              A strong academic foundation that encourages students
              to understand concepts, ask questions and think critically.
            </p>

            <a href="#admissions">
              Explore
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="academic-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="academic-number"></span>

            <h3>Creative Learning</h3>

            <p>
              Opportunities to explore ideas through creativity,
              collaboration, projects and experiences beyond textbooks.
            </p>

            <a href="#admissions">
              Explore
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="academic-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="academic-number"></span>

            <h3>Future Ready</h3>

            <p>
              Learning experiences designed to help students build
              confidence, communication skills and a growth mindset.
            </p>

            <a href="#admissions">
              Explore
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AcademicsSection
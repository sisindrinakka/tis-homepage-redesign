import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const AdmissionsSection = () => {
  return (
    <section className="admissions-section" id="admissions">
      <motion.div
        className="admissions-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="admissions-content">
          <p className="section-label">ADMISSIONS</p>

          <h2>
            Begin your
            <span> Tulas journey.</span>
          </h2>

          <p>
            Discover an environment where students are encouraged
            to learn, explore and grow with confidence.
          </p>

          <div className="admissions-buttons">
            <a
              href="https://tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="admission-primary"
            >
              Visit Official Website
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#home"
              className="admission-secondary"
            >
              Back to top
            </a>
          </div>
        </div>

        <div className="admissions-number">
          <span>04</span>
          <p>START YOUR JOURNEY</p>
        </div>
      </motion.div>
    </section>
  )
}

export default AdmissionsSection
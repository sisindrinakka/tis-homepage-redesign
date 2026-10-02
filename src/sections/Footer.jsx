import { ArrowUpRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            TULAS
          </a>

          <p>
            Inspiring learners to discover,
            grow and shape tomorrow.
          </p>
        </div>


        {/* Navigation */}
        <div className="footer-column">
          <h4>EXPLORE</h4>

          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus</a>
          <a href="#admissions">Admissions</a>
        </div>


        {/* Official Website */}
        <div className="footer-column">
          <h4>CONNECT</h4>

          <a
            href="https://tis.edu.in/"
            target="_blank"
            rel="noreferrer"
          >
            Official Website
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Tulas International School
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </div>

    </footer>
  )
}

export default Footer
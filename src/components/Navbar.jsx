import { useState } from "react"
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react"

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">

      {/* Logo */}
      <a
        href="#home"
        className="nav-logo"
        onClick={closeMenu}
      >
        TULAS
      </a>

      {/* Navigation */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#academics" onClick={closeMenu}>
          Academics
        </a>

        <a href="#campus" onClick={closeMenu}>
          Campus
        </a>

        <a href="#admissions" onClick={closeMenu}>
          Admissions
        </a>

        {/* Enquire Button */}
        <a
          href="#admissions"
          className="nav-admission"
          onClick={closeMenu}
        >
          Enquire
          <ArrowUpRight size={15} />
        </a>

        {/* Dark / Light Mode Button */}
        <button
          className="theme-button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          type="button"
        >
          {isDarkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

      </nav>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        type="button"
      >
        {isMenuOpen ? (
          <X size={26} />
        ) : (
          <Menu size={26} />
        )}
      </button>

    </header>
  )
}

export default Navbar
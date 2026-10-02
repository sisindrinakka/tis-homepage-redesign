import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ScrollProgress from "./components/ScrollProgress"

import AboutSection from "./sections/AboutSection"
import AcademicsSection from "./sections/AcademicsSection"
import CampusSection from "./sections/CampusSection"
import AdmissionsSection from "./sections/AdmissionsSection"
import Footer from "./sections/Footer"

import "./App.css"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>

      <ScrollProgress />

      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main>

        {/* HOME */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <AboutSection />

        {/* ACADEMICS */}
        <AcademicsSection />

        {/* CAMPUS */}
        <CampusSection />

        {/* ADMISSIONS */}
        <AdmissionsSection />

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default App
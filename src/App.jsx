import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Resume } from './components/resume'
import { About } from './components/about'
import { Experience } from './components/experience'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Resume data={landingPageData.Resume} />
      <About data={landingPageData.About} />
      <Experience />
      <Projects />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App

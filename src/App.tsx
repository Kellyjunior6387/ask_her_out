import { useState, useRef, useEffect } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import OurStory from './components/OurStory'
import TransitionPage from './components/TransitionPage'
import TheQuestion from './components/TheQuestion'
import SuccessState from './components/SuccessState'
import FloatingHearts from './components/FloatingHearts'

type Section = 'landing' | 'story' | 'transition' | 'question' | 'success'

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('landing')
  const audioRef = useRef<HTMLAudioElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasPlayedRef = useRef(false)
  const sectionRefs = useRef<Record<Section, HTMLDivElement | null>>({
    landing: null,
    story: null,
    transition: null,
    question: null,
    success: null
  })

  const sections: Section[] = ['landing', 'story', 'transition', 'question', 'success']
  const currentIndex = sections.indexOf(currentSection)
  const progressPercentage = ((currentIndex) / (sections.length - 1)) * 100

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1]
      setCurrentSection(nextSection)
      
      // Play music on first continue (from landing page)
      if (!hasPlayedRef.current && audioRef.current) {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked by browser
        })
        hasPlayedRef.current = true
      }
      
      // Scroll to the actual section element for more reliable positioning
      setTimeout(() => {
        const sectionEl = sectionRefs.current[nextSection]
        if (sectionEl && containerRef.current) {
          sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 0)
    }
  }

  const handleSuccess = () => {
    setCurrentSection('success')
    setTimeout(() => {
      const sectionEl = sectionRefs.current['success']
      if (sectionEl && containerRef.current) {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    return () => {}
  }, [])

  return (
    <div className="app">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
      </div>

      <div className="sections-container" ref={containerRef}>
        <div
          className="section"
          ref={(el) => {
            if (el) sectionRefs.current['landing'] = el
          }}
        >
          <LandingPage onNext={handleNext} />
        </div>
        <div
          className="section"
          ref={(el) => {
            if (el) sectionRefs.current['story'] = el
          }}
        >
          <OurStory onNext={handleNext} />
        </div>
        <div
          className="section"
          ref={(el) => {
            if (el) sectionRefs.current['transition'] = el
          }}
        >
          <TransitionPage onNext={handleNext} />
        </div>
        <div
          className="section"
          ref={(el) => {
            if (el) sectionRefs.current['question'] = el
          }}
        >
          <TheQuestion onYes={handleSuccess} />
        </div>
        <div
          className="section"
          ref={(el) => {
            if (el) sectionRefs.current['success'] = el
          }}
        >
          <SuccessState />
        </div>
      </div>

      <FloatingHearts />
      <audio
        ref={audioRef}
        loop
        aria-label="Background music for the experience"
      >
        <source src="/music.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default App

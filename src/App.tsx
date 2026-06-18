import { useState, useRef, useEffect } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import OurStory from './components/OurStory'
import MemoryBoard from './components/MemoryBoard'
import TransitionPage from './components/TransitionPage'
import TheQuestion from './components/TheQuestion'
import SuccessState from './components/SuccessState'
import FloatingHearts from './components/FloatingHearts'
import MusicPlayer from './components/MusicPlayer'

type Section = 'landing' | 'story' | 'memory' | 'transition' | 'question' | 'success'

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('landing')
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const sections: Section[] = ['landing', 'story', 'memory', 'transition', 'question', 'success']
  const currentIndex = sections.indexOf(currentSection)
  const progressPercentage = ((currentIndex) / (sections.length - 1)) * 100

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1]
      setCurrentSection(nextSection)
      if (containerRef.current) {
        containerRef.current.scrollTop = (currentIndex + 1) * window.innerHeight
      }
    }
  }

  const handleSuccess = () => {
    setCurrentSection('success')
    if (containerRef.current) {
      containerRef.current.scrollTop = window.innerHeight * sections.length
    }
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked by browser
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [])

  return (
    <div className="app">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
      </div>

      <div className="sections-container" ref={containerRef}>
        <div className="section">
          <LandingPage onNext={handleNext} />
        </div>
        <div className="section">
          <OurStory onNext={handleNext} />
        </div>
        <div className="section">
          <MemoryBoard onNext={handleNext} />
        </div>
        <div className="section">
          <TransitionPage onNext={handleNext} />
        </div>
        <div className="section">
          <TheQuestion onYes={handleSuccess} />
        </div>
        <div className="section">
          <SuccessState />
        </div>
      </div>

      <FloatingHearts />
      <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
      <audio ref={audioRef} loop>
        <source src="/music.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default App

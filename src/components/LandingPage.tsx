import { useEffect, useState } from 'react'
import './LandingPage.css'

interface LandingPageProps {
  onNext: () => void
}

export default function LandingPage({ onNext }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`landing-page ${isVisible ? 'visible' : ''}`}>
      <div className="landing-card">
        <h1 className="landing-title">Hi Superstar ✨</h1>
        <p className="landing-text">
          Before you continue, I need approximately two minutes of your attention.
        </p>
        <button onClick={onNext} className="landing-button">
          Continue →
        </button>
      </div>
    </div>
  )
}

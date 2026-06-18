import { useEffect, useState } from 'react'
import './TransitionPage.css'

interface TransitionPageProps {
  onNext: () => void
}

export default function TransitionPage({ onNext }: TransitionPageProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timings = [500, 2000, 2000, 2000]
    const delays = [
      0,
      timings[0],
      timings[0] + timings[1],
      timings[0] + timings[1] + timings[2]
    ]

    const timers = [
      setTimeout(() => setStage(1), delays[1]),
      setTimeout(() => setStage(2), delays[2]),
      setTimeout(() => setStage(3), delays[3])
    ]

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <div className="transition-page">
      <div className="transition-card">
        <h1 className={`transition-text main visible`}>
          So...
        </h1>
        {stage >= 1 && (
          <p className={`transition-text secondary ${stage >= 1 ? 'visible' : ''}`}>
            I've been thinking.
          </p>
        )}
        {stage >= 2 && (
          <p className={`transition-text secondary ${stage >= 2 ? 'visible' : ''}`}>
            We've somehow done everything except go on an actual date.
          </p>
        )}
        {stage >= 3 && (
          <button onClick={onNext} className={`transition-button ${stage >= 3 ? 'visible' : ''}`}>
            Continue
          </button>
        )}
      </div>
    </div>
  )
}

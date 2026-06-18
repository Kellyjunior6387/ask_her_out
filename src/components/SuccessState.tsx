import { useEffect, useState } from 'react'
import './SuccessState.css'

export default function SuccessState() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Generate confetti particles
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5
    }))
    setConfetti(pieces)
  }, [])

  return (
    <div className="success-state">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            '--delay': `${piece.delay}s`,
            '--tx': `${(Math.random() - 0.5) * 200}px`,
            '--ty': `${100 + Math.random() * 200}px`,
          } as React.CSSProperties & { '--delay': string; '--tx': string; '--ty': string }}
        >
          🌸
        </div>
      ))}
      <div className="success-card">
        <h1 className="success-title">Excellent choice.</h1>
        <p className="success-text">Phase 2 unlocked.</p>
        <p className="success-subtext">More details coming shortly...</p>
      </div>
    </div>
  )
}

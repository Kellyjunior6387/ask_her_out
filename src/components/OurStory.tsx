import { useState } from 'react'
import './OurStory.css'

interface OurStoryProps {
  onNext: () => void
}

export default function OurStory({ onNext }: OurStoryProps) {
  const [revealedIndex, setRevealedIndex] = useState(0)

  const statements = [
    "We met on IG.",
    "Then somehow there was Coast.",
    "Then brownies happened.",
    "Then a lot more talking happened.",
    "Then somehow I started looking forward to seeing you.",
    "And now we're here."
  ]

  const handleReveal = () => {
    if (revealedIndex < statements.length) {
      setRevealedIndex(revealedIndex + 1)
    }
  }

  const handleContinue = () => {
    onNext()
  }

  return (
    <div className="our-story">
      <div className="story-card">
        <h2 className="story-title">Our Story</h2>
        <div className="story-statements">
          {statements.slice(0, revealedIndex).map((statement, index) => (
            <p key={index} className="statement">
              {statement}
            </p>
          ))}
        </div>
        
        {revealedIndex < statements.length ? (
          <button onClick={handleReveal} className="reveal-button">
            Continue...
          </button>
        ) : (
          <button onClick={handleContinue} className="reveal-button">
            Continue
          </button>
        )}
      </div>
    </div>
  )
}

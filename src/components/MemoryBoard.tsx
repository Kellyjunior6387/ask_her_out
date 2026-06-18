import { useState } from 'react'
import './MemoryBoard.css'

interface MemoryCard {
  id: number
  emoji: string
  title: string
  caption: string
}

interface MemoryBoardProps {
  onNext: () => void
}

const memories: MemoryCard[] = [
  {
    id: 1,
    emoji: '📍',
    title: 'Coast',
    caption: 'Still one of my favorite plot twists.'
  },
  {
    id: 2,
    emoji: '🍫',
    title: 'Brownies',
    caption: 'We should probably make brownies again.'
  },
  {
    id: 3,
    emoji: '📞',
    title: 'Random Calls',
    caption: 'Somehow these became a habit.'
  },
  {
    id: 4,
    emoji: '🏃',
    title: 'Marathon Runner',
    caption: '42km is still ridiculous by the way.'
  },
  {
    id: 5,
    emoji: '🦈',
    title: 'Professional Biter',
    caption: "I'm still recovering."
  }
]

export default function MemoryBoard({ onNext }: MemoryBoardProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="memory-board">
      <h2 className="memory-title">Our Memories</h2>
      <div className="cards-grid">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className={`memory-card ${hoveredId === memory.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredId(memory.id)}
            onMouseLeave={() => setHoveredId(null)}
            onTouchStart={() => setHoveredId(memory.id)}
            onTouchEnd={() => setHoveredId(null)}
          >
            <div className="card-front">
              <div className="card-emoji">{memory.emoji}</div>
              <div className="card-title">{memory.title}</div>
            </div>
            <div className="card-back">
              <p className="card-caption">{memory.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="memory-text">
        My favorite part has been getting to know the person behind all these things.
      </p>
      <button onClick={onNext} className="memory-button">
        Continue
      </button>
    </div>
  )
}

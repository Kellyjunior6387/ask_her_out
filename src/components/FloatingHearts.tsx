import { useEffect, useState } from 'react'
import './FloatingHearts.css'

interface Heart {
  id: number
  left: number
  delay: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Generate initial hearts
    const initialHearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: 0
      }
      setHearts(prev => {
        const updated = [...prev, newHeart]
        // Remove oldest if too many
        if (updated.length > 15) {
          return updated.slice(-15)
        }
        return updated
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            '--delay': `${heart.delay}s`
          } as React.CSSProperties & { '--delay': string }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

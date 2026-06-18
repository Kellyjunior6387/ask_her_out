import './MusicPlayer.css'

interface MusicPlayerProps {
  isPlaying: boolean
  onToggle: () => void
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <button
      className="music-button"
      onClick={onToggle}
      title={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
      aria-label={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
    >
      <span className="music-button-icon">🎵</span>
      <span className="music-button-text">
        {isPlaying ? 'Pause' : 'Play'}
      </span>
    </button>
  )
}

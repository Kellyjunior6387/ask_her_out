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
      {isPlaying ? '🎵\nPause' : '🎵\nPlay'}
    </button>
  )
}

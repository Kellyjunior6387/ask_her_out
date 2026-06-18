import './TheQuestion.css'

interface TheQuestionProps {
  onYes: () => void
}

export default function TheQuestion({ onYes }: TheQuestionProps) {
  return (
    <div className="the-question">
      <div className="question-card">
        <h1 className="question-title">Would you let me take you on a proper date?</h1>
        <p className="question-subtitle">
          No pressure. I just think it would be really nice 😊
        </p>
        <div className="question-buttons">
          <button onClick={onYes} className="yes-button">
            Absolutely 🌸
          </button>
          <button onClick={onYes} className="yes-button">
            I'd love to 🌸
          </button>
        </div>
      </div>
    </div>
  )
}

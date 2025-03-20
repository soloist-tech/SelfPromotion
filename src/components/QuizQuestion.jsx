import React from 'react'

/**
 * QuizQuestion component
 * Displays a single question and its options
 * 
 * @param {Object} props - Component props
 * @param {Object} props.question - Question object with text and options
 * @param {Function} props.onAnswer - Function to call when an answer is selected
 * @param {Object} props.selectedAnswer - Currently selected answer (if any)
 */
const QuizQuestion = ({ question, onAnswer, selectedAnswer }) => {
  // Handle option selection
  const handleSelectOption = (option) => {
    if (!selectedAnswer) { // Prevent changing answer after selection
      onAnswer(question.id, option)
    }
  }
  
  return (
    <div className="quiz-question animate-fade-in">
      {/* Question text */}
      <h2 className="question-text">{question.text}</h2>
      
      {/* Answer options */}
      <div className="answer-options space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`answer-option ${selectedAnswer?.id === option.id ? 'selected' : ''}`}
            onClick={() => handleSelectOption(option)}
            disabled={selectedAnswer !== undefined}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestion
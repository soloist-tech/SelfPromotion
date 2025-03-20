import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import QuizQuestion from './QuizQuestion'
import AnalyzingResults from './AnalyzingResults'

/**
 * Quiz component that manages questions and navigation
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onComplete - Function to call when user completes the quiz
 */
const Quiz = ({ onComplete }) => {
  // Current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  
  // Store all answers
  const [answers, setAnswers] = useState({})
  
  // Whether we're currently "analyzing" results (fake progress bar)
  const [analyzing, setAnalyzing] = useState(false)
  
  // REPLACE: Define your quiz questions here
  // Each question should have:
  // - id: unique identifier
  // - text: the question text
  // - options: array of possible answers
  //   - each option has id, text, and type (used for scoring)
  const questions = [
    {
      id: 'q1',
      text: 'When starting a new AI project, your first thought is:',
      options: [
        { id: 'q1a1', text: 'How will this change the future of humanity?', type: 'type1' },
        { id: 'q1a2', text: 'What technical challenges will I need to solve?', type: 'type2' },
        { id: 'q1a3', text: 'How do we ensure this is beneficial and fair?', type: 'type3' },
        { id: 'q1a4', text: 'Is there a market for this? How do we monetize it?', type: 'type4' }
      ]
    },
    {
      id: 'q2',
      text: 'Your favorite part of AI research is:',
      options: [
        { id: 'q2a1', text: 'Imagining breakthroughs that could transform society', type: 'type1' },
        { id: 'q2a2', text: 'Solving complex mathematical and algorithmic problems', type: 'type2' },
        { id: 'q2a3', text: 'Ensuring AI systems align with human values', type: 'type3' },
        { id: 'q2a4', text: 'Building products people love to use', type: 'type4' }
      ]
    },
    {
      id: 'q3',
      text: 'Your desk/workspace could best be described as:',
      options: [
        { id: 'q3a1', text: 'Covered with books about futurism and philosophy', type: 'type1' },
        { id: 'q3a2', text: 'Multiple monitors displaying code and papers', type: 'type2' },
        { id: 'q3a3', text: 'Organized, with notes on AI ethics and responsibility', type: 'type3' },
        { id: 'q3a4', text: 'A mix of tech gadgets and business/marketing books', type: 'type4' }
      ]
    },
    {
      id: 'q4',
      text: 'In a team meeting, you\'re most likely to say:',
      options: [
        { id: 'q4a1', text: '"What if we could create AI that does X? Imagine the possibilities!"', type: 'type1' },
        { id: 'q4a2', text: '"I\'ve been experimenting with this new architecture that improves performance by 15%"', type: 'type2' },
        { id: 'q4a3', text: '"Have we considered how this might impact different user groups?"', type: 'type3' },
        { id: 'q4a4', text: '"Let\'s focus on the features users actually want and will pay for"', type: 'type4' }
      ]
    },
    {
      id: 'q5',
      text: 'Your biggest concern about AI is:',
      options: [
        { id: 'q5a1', text: 'We\'re moving too slowly toward transformative AI', type: 'type1' },
        { id: 'q5a2', text: 'Current techniques have fundamental limitations we need to overcome', type: 'type2' },
        { id: 'q5a3', text: 'We\'re not paying enough attention to safety and ethics', type: 'type3' },
        { id: 'q5a4', text: 'Most AI projects fail to create real business value', type: 'type4' }
      ]
    }
    // Add more questions as needed
  ]

  // Handle answer selection
  const handleAnswer = (questionId, selectedOption) => {
    // Store the answer
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }))
    
    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1)
      } else {
        // If last question, start "analyzing" phase
        setAnalyzing(true)
        
        // After a fake delay, complete the quiz
        setTimeout(() => {
          onComplete(answers)
        }, 3000) // 3 second fake "analysis"
      }
    }, 500) // 0.5 second delay before showing next question
  }

  // Calculate progress percentage
  const progress = Math.round(((currentQuestionIndex) / questions.length) * 100)
  
  // Get current question
  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="quiz-container py-10">
      {!analyzing ? (
        <div className="quiz-card">
          {/* Progress tracking */}
          <div className="mb-6">
            <ProgressBar progress={progress} />
            <div className="text-right text-sm text-gray-500 mt-1">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
          
          {/* Current question */}
          <QuizQuestion
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestion.id]}
          />
        </div>
      ) : (
        <AnalyzingResults />
      )}
    </div>
  )
}

export default Quiz
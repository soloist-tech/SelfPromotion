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
      text: 'The annual budget meeting is approaching, and the CFO is struggling with outdated financial reporting systems that make data consolidation a nightmare. What\’s the best solution?',
      options: [
        { id: 'q1a1', text: 'Implement a cloud-based financial management system to streamline data consolidation.', type: 'type1' },
        { id: 'q1a2', text: 'Develop custom scripts to automate data extraction from existing systems.', type: 'type2' },
        { id: 'q1a3', text: 'Schedule intensive manual data entry sessions with the finance team.', type: 'type3' },
        { id: 'q1a4', text: 'Call Robby.', type: 'type4' }
      ]
    },
    {
      id: 'q2',
      text: 'A recent audit revealed compliance issues due to inconsistent data security protocols. The CFO needs a rapid resolution. What do you propose?',
      options: [
        { id: 'q2a1', text: 'Deploy an organization-wide cybersecurity training program and implement standardized security protocols.', type: 'type1' },
        { id: 'q2a2', text: 'Install advanced firewall and intrusion detection systems.', type: 'type2' },
        { id: 'q2a3', text: 'Assign a task force to manually review and update security settings.', type: 'type3' },
        { id: 'q2a4', text: 'Call Robby.', type: 'type4' }
      ]
    },
    {
      id: 'q3',
      text: 'The nonprofit is expanding, and the CFO is concerned about scaling IT infrastructure without inflating costs. What\’s your recommendation?',
      options: [
        { id: 'q3a1', text: 'Migrate to scalable cloud services with pay-as-you-go pricing models.', type: 'type1' },
        { id: 'q3a2', text: 'Purchase additional physical servers to accommodate growth.', type: 'type2' },
        { id: 'q3a3', text: 'Outsource IT infrastructure management to a third-party provider.', type: 'type3' },
        { id: 'q3a4', text: 'Call Robby.', type: 'type4' }
      ]
    },
    {
      id: 'q4',
      text: 'The finance department is overwhelmed with manual data entry, leading to errors and delays. The CFO seeks a solution to improve accuracy and efficiency. What do you suggest?',
      options: [
        { id: 'q4a1', text: 'Implement an automated data entry system with OCR capabilities.', type: 'type1' },
        { id: 'q4a2', text: 'Hire temporary staff to handle the increased workload.', type: 'type2' },
        { id: 'q4a3', text: 'Organize a team-building retreat to boost morale and productivity.', type: 'type3' },
        { id: 'q4a4', text: 'Call Robby.', type: 'type4' }
      ]
    },
    {
      id: 'q5',
      text: 'The CFO is concerned about potential cyber threats targeting donor information. What proactive measures should be taken?',
      options: [
        { id: 'q5a1', text: 'Conduct regular security audits and implement robust encryption protocols.', type: 'type1' },
        { id: 'q5a2', text: 'Limit access to donor information to senior staff only.', type: 'type2' },
        { id: 'q5a3', text: 'Store donor information on offline servers to prevent hacking.', type: 'type3' },
        { id: 'q5a4', text: 'Call Robby.', type: 'type4' }
      ]
    }
  ];
  
  
  
  

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
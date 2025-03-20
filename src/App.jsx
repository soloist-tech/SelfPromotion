import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Quiz from './components/Quiz'
import ResultsPage from './components/ResultsPage'

/**
 * Main App component that controls the flow of the quiz
 * It manages three main states: landing page, quiz, and results
 */
function App() {
  // Track the current page/phase of the app
  const [currentPage, setCurrentPage] = useState('landing') // 'landing', 'quiz', or 'results'
  
  // Store all user answers
  const [userAnswers, setUserAnswers] = useState({})
  
  // Store the quiz result
  const [quizResult, setQuizResult] = useState(null)
  
  /**
   * Start the quiz - transition from landing page to quiz
   */
  const startQuiz = () => {
    setCurrentPage('quiz')
  }
  
  /**
   * Handle quiz completion and calculate results
   * @param {Object} answers - Object containing all user answers
   */
  const completeQuiz = (answers) => {
    setUserAnswers(answers)
    
    // Calculate the result based on answers
    // This is a placeholder - you'll implement your own scoring logic
    const result = calculateResult(answers)
    setQuizResult(result)
    
    // Move to results page
    setCurrentPage('results')
  }
  
  /**
   * Reset the quiz to start over
   */
  const restartQuiz = () => {
    setUserAnswers({})
    setQuizResult(null)
    setCurrentPage('landing')
  }
  
  /**
   * Calculate quiz result based on answers
   * This is where you'll implement your custom scoring algorithm
   * @param {Object} answers - Object containing all user answers
   * @return {Object} result - The calculated result object
   */
  const calculateResult = (answers) => {
    // PLACEHOLDER: Replace with your actual scoring logic
    
    // Example: Count which type of answer appears most frequently
    const answerCounts = {
      'type1': 0, 
      'type2': 0,
      'type3': 0,
      'type4': 0
    }
    
    // Count occurrences of each answer type
    Object.values(answers).forEach(answer => {
      if (answer.type && answerCounts[answer.type] !== undefined) {
        answerCounts[answer.type]++
      }
    })
    
    // Find the most common answer type
    let maxType = 'type1'
    let maxCount = 0
    
    Object.entries(answerCounts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxType = type
        maxCount = count
      }
    })
    
    // Return corresponding result based on dominant answer type
    const results = {
      'type1': {
        title: 'The AI Visionary',
        description: 'You\'re the big-picture thinker who sees the future of AI clearly. Your vision inspires others, though sometimes your head is in the clouds.',
        image: '/results/visionary.jpg'
      },
      'type2': {
        title: 'The Technical Wizard',
        description: 'You know the math, the code, and how to make it all work. You\'re the backbone of any AI project, though you might occasionally forget humans exist.',
        image: '/results/wizard.jpg'
      },
      'type3': {
        title: 'The Ethical Guardian',
        description: 'You ensure AI serves humanity's best interests. Your moral compass is strong, even if it occasionally slows down progress.',
        image: '/results/guardian.jpg'
      },
      'type4': {
        title: 'The AI Entrepreneur',
        description: 'You know how to turn AI into products people want. Your business savvy is matched only by your appetite for risk.',
        image: '/results/entrepreneur.jpg'
      }
    }
    
    return results[maxType]
  }
  
  // Render the appropriate component based on the current page
  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'landing' && (
        <LandingPage onStart={startQuiz} />
      )}
      
      {currentPage === 'quiz' && (
        <Quiz onComplete={completeQuiz} />
      )}
      
      {currentPage === 'results' && (
        <ResultsPage 
          result={quizResult} 
          onRestart={restartQuiz} 
        />
      )}
    </div>
  )
}

export default App
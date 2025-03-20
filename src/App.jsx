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
        title: 'Overwhelmed',
        description: 'You\’re juggling financial reports, compliance issues, and IT infrastructure challenges. It seems like there\’s never enough time in the day. Perhaps it\’s time to bring in an expert who can streamline your IT operations and lighten your load.',
        image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzl6OHY1aDdjbW1sdzN3Z3RocXk1MWVpdmprdHhiYTZ6czQ1YWltbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cA0TiRmuetO1szgShj/giphy.gif'
      },
      'type2': {
        title: 'Tech-Savvy',
        description: 'You have a knack for technology and often find yourself delving into IT projects. However, this takes time away from your core financial responsibilities. Partnering with a dedicated IT manager could allow you to focus on what you do best.',
        image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnk5b3IxZ3ljYms3c2V4ODlyeHFreXQ0b3VqMzJoOGdtcDlpcnk3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3owypf6HrM3J7UTvAA/giphy.gif'
      },
      'type3': {
        title: 'Delegator',
        description: 'You understand the importance of entrusting tasks to specialists. While you focus on strategic financial planning, having a reliable IT manager ensures that the technical aspects are handled efficiently.',
        image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhkdjU0NTNuMm16YXJwM29vMXpjemt3cnY2aHIxbXFzenJ5dHgxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKDp7xvUdbCrC/giphy.gif'
      },
      'type4': {
        title: 'Visionary',
        description: 'You obviously know exactly what you\'re doing, and so do I.',
        image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRlaGl5ZTVhMTVybGY5MDhyNXpseDF4amJkeHQ4bmM1MHYzYzhleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Id1Ay5MD5IsF6Or51v/giphy.gif'
      }
    };
    
    
    
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
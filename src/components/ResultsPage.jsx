import React from 'react'
import ShareButton from './ShareButton'

/**
 * ResultsPage component
 * Displays the quiz results to the user
 * 
 * @param {Object} props - Component props
 * @param {Object} props.result - The result object with title, description, and image
 * @param {Function} props.onRestart - Function to call to restart the quiz
 */
const ResultsPage = ({ result, onRestart }) => {
  // If no result, show a friendly error
  if (!result) {
    return (
      <div className="quiz-container">
        <div className="quiz-card text-center">
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p className="mb-6">We couldn't analyze your results. Please try again.</p>
          <button onClick={onRestart} className="btn btn-primary">
            Restart Quiz
          </button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="quiz-container py-10">
      <div className="quiz-card text-center">
        {/* Result heading */}
        <div className="mb-2 text-sm font-medium text-primary uppercase tracking-wide">Your Easy Button Solution</div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">{result.title}</h1>
        
        {/* Result image - REPLACE with your own images */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center overflow-hidden">
            {/* Placeholder for result image */}
            {/* You'll need to add your own images to the public folder */}
            <div className="text-6xl">{result.title[4]}</div>
          </div>
        </div>
        
        {/* Result description */}
        <div className="text-lg mb-8">
          {result.description}
        </div>
        
        {/* REPLACE: Custom content based on result type */}
        <div className="mb-10 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">What This Means For You:</h3>
          <p>
            I'm a devoted and loyal employee who takes every challenge seriously. I excel at new challenges and I have a practiced hand with over 15 years experience in Enterprise Technology.
          </p>
        </div>
        
        {/* Share section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button onClick={onRestart} className="btn btn-secondary w-full sm:w-auto">
            Take Quiz Again
          </button>
          
          <ShareButton result={result} />
        </div>
        
        {/* Footer with self-promotion */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
          {/* REPLACE: Add your own info here */}
          <p>Created by Robert Robinson - Team Manager, Infrastructure Engineer and part-time AI Researcher/Developer</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="https://github.com/soloist-tech" className="text-gray-400 hover:text-gray-600">GitHub</a>
            <a href="https://www.linkedin.com/in/diligent-haas/" className="text-gray-400 hover:text-gray-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
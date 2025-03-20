import React from 'react'

/**
 * LandingPage component
 * This is the first screen users see when they visit the site
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onStart - Function to call when user clicks Start Quiz
 */
const LandingPage = ({ onStart }) => {
  return (
    <div className="quiz-container flex flex-col items-center justify-center min-h-screen text-center py-12">
      {/* Hero Section with Title and Intro */}
      <div className="quiz-card w-full max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
          {/* REPLACE: Your quiz title */}
          Easy Button Quiz
        </h1>
        
        <div className="mb-6 text-xl text-gray-600">
          {/* REPLACE: Your tagline */}
          Discover the answer to all your problems!
        </div>
        
        {/* Quiz Description */}
        <p className="mb-8 text-gray-700">
          {/* REPLACE: Your quiz description */}
          Tired of getting dragged into every little thing? Take this quiz to find a simple solution. Warning: Side effects may include excessive success and uncontrollable smiling.

        </p>
        
        {/* Start Quiz Button */}
        <button 
          onClick={onStart} 
          className="btn btn-primary text-lg px-8 py-3"
        >
          Start Quiz
        </button>
      </div>
      
      {/* OPTIONAL: Testimonials or Featured On section */}
      <div className="w-full max-w-3xl mx-auto mt-8">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">As featured absolutely nowhere:</h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-50">
          {/* REPLACE: Add your fake feature logos here */}
          <div className="text-gray-400 font-bold">WIRED*</div>
          <div className="text-gray-400 font-bold">TechCrunch*</div>
          <div className="text-gray-400 font-bold">MIT Technology Review*</div>
          <div className="text-gray-400 font-bold">Artificial Daily*</div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
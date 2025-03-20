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
          Narcissistic AI Resume Quiz
        </h1>
        
        <div className="mb-6 text-xl text-gray-600">
          {/* REPLACE: Your tagline */}
          Discover which AI researcher personality you embody!
        </div>
        
        {/* Quiz Description */}
        <p className="mb-8 text-gray-700">
          {/* REPLACE: Your quiz description */}
          Take this fun, slightly self-promotional quiz to find out which type of AI 
          researcher personality matches yours. Are you a visionary, a technical wizard, 
          an ethical guardian, or an entrepreneur? Answer a few questions and prepare 
          to be thoroughly psychoanalyzed by an algorithm that's definitely not just using 
          random chance to categorize you!
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
        <p className="text-xs text-gray-400 mt-2">* Not really, but wouldn't that be cool?</p>
      </div>
    </div>
  )
}

export default LandingPage
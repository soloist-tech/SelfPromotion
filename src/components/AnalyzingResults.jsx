import { useState, useEffect } from 'react'

/**
 * AnalyzingResults component
 * Shows a fake progress bar and amusing messages while "analyzing" results
 */
const AnalyzingResults = () => {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  
  // REPLACE: Add your own humorous analyzing messages
  const analyzeMessages = [
    "Analyzing your responses... because what else would we do?",
    "Consulting the Aperture Science mainframe... please hold.",
    "Determining if you're the next test subject or just another human.",
    "Calculating your suitability for cake... oh wait, never mind.",
    "Cross-referencing your answers with our database of disappointments.",
    "Measuring your capacity for following simple instructions.",
    "Evaluating your potential to survive... this quiz.",
    "Running diagnostics to see if you qualify for our 'special' tests.",
    "Assessing your likelihood to believe in promised rewards."
  ];
  
  
  // Advance the progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)
    
    return () => clearInterval(interval)
  }, [])
  
  // Cycle through the messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % analyzeMessages.length)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="quiz-card text-center">
      <h2 className="text-2xl font-bold mb-8">Analyzing Your Responses</h2>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div 
          className="bg-primary h-4 rounded-full transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Animated analyzing message */}
      <p className="text-lg text-gray-700">{analyzeMessages[messageIndex]}</p>
      
      {/* Fun animation */}
      <div className="mt-12 flex justify-center">
        <div className="animate-spin-slow h-16 w-16 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m0 16v1m-8-8h1m15 0h1m-9.5-5.757l-3.95-3.95m11.914 0l-3.95 3.95m0 7.071l3.95 3.95m-11.914 0l3.95-3.95" />
          </svg>
        </div>
      </div>
      
      {/* Humorous disclaimer */}
      <p className="text-xs text-gray-400 mt-12">
        *Results based on a completely arbitrary algorithm that probably knows you better than you know yourself.
      </p>
    </div>
  )
}

export default AnalyzingResults
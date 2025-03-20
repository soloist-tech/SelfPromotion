import React from 'react'

/**
 * ProgressBar component
 * Shows the current quiz progress
 * 
 * @param {Object} props - Component props
 * @param {number} props.progress - Progress percentage (0-100)
 */
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
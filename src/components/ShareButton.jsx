import { useState } from 'react'

/**
 * ShareButton component
 * Allows users to share their quiz results
 * 
 * @param {Object} props - Component props
 * @param {Object} props.result - The result to share
 */
const ShareButton = ({ result }) => {
  const [copied, setCopied] = useState(false)
  
  // Generate share text
  const shareText = `I took the Narcissistic AI Resume Quiz and I'm "${result.title}"! Take the quiz to discover your AI personality type: https://yourquizurl.netlify.app`
  
  // Handle share button click
  const handleShare = async () => {
    // Use Web Share API if available
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My AI Personality Quiz Result',
          text: shareText,
          url: 'https://yourquizurl.netlify.app',
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to clipboard copy
      try {
        await navigator.clipboard.writeText(shareText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.log('Error copying to clipboard:', error)
      }
    }
  }
  
  return (
    <button 
      onClick={handleShare} 
      className="btn btn-accent w-full sm:w-auto flex items-center justify-center gap-2"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
      </svg>
      {copied ? 'Copied!' : 'Share Result'}
    </button>
  )
}

export default ShareButton
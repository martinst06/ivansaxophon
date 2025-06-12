'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
  children: React.ReactNode
  className?: string
}

export default function SubmitButton({ children, className }: SubmitButtonProps) {
  const { pending } = useFormStatus()
  
  return (
    <button 
      type="submit"
      disabled={pending}
      className={`${className} ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {pending ? 'Sending...' : children}
    </button>
  )
} 
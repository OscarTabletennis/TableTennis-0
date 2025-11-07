
import * as React from 'react'
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className='', ...props }, ref)=> (
  <input ref={ref} className={`h-9 w-full rounded-md border border-slate-300 px-2 ${className}`} {...props} />
))
Input.displayName='Input'

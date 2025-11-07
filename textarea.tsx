
import * as React from 'react'
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className='', ...props }, ref)=> (
  <textarea ref={ref} className={`min-h-[80px] w-full rounded-md border border-slate-300 px-2 py-1 ${className}`} {...props} />
))
Textarea.displayName='Textarea'

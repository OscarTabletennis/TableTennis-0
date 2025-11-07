
import * as React from 'react'
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'outline'|'destructive'|'ghost', asChild?: boolean }>(
  ({ className='', variant='default', ...props }, ref) => (
    <button ref={ref} className={`px-3 py-2 rounded-md text-sm border
      ${variant==='outline' ? 'bg-white border-slate-300' : ''}
      ${variant==='destructive' ? 'border-red-500 text-red-600' : ''}
      ${variant==='ghost' ? 'border-transparent' : ''}
    ${className}`} {...props} />
  )
)
Button.displayName='Button'


import * as React from 'react'
export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className='', ...props }) => <span className={`inline-block rounded-full border border-slate-300 px-2 text-xs ${className}`} {...props} />

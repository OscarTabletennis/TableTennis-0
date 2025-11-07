
import * as React from 'react'
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...props }) => <div className={`rounded-2xl border bg-white ${className}`} {...props} />
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...props }) => <div className={`border-b p-4 ${className}`} {...props} />
export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className='', ...props }) => <h3 className={`text-lg font-semibold ${className}`} {...props} />
export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className='', ...props }) => <p className={`text-sm text-slate-500 ${className}`} {...props} />
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...props }) => <div className={`p-4 ${className}`} {...props} />

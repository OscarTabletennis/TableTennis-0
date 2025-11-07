
import * as React from 'react'
export function Dialog({ open, children }:{ open?: boolean; children:React.ReactNode }){
  return open ? <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">{children}</div> : null
}
export const DialogTrigger: React.FC<{ asChild?: boolean; children: React.ReactNode }> = ({ children }) => <>{children}</>
export const DialogContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...props }) => <div className={`w-[520px] rounded-xl bg-white p-4 ${className}`} {...props} />
export const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (p)=><div className="mb-2" {...p}/>
export const DialogTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (p)=><h3 className="text-lg font-semibold" {...p}/>
export const DialogDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (p)=><p className="text-sm text-slate-500" {...p}/>
export const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (p)=><div className="mt-4 flex justify-end gap-2" {...p}/>

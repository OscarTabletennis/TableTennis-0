
import * as React from 'react'
type Ctx = { value: string, setValue: (v:string)=>void }
const TabsCtx = React.createContext<Ctx | null>(null)
export function Tabs({ value, onValueChange, children, className='' }:{ value:string; onValueChange:(v:string)=>void; children:React.ReactNode; className?:string }){
  return <TabsCtx.Provider value={{ value, setValue:onValueChange }}><div className={className}>{children}</div></TabsCtx.Provider>
}
export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...props}) => <div className={`rounded-xl border bg-white p-1 grid grid-cols-4 gap-1 ${className}`} {...props}/>
export function TabsTrigger({ value, children, className='' }:{ value:string; children:React.ReactNode; className?:string }){
  const ctx = React.useContext(TabsCtx)!; const active = ctx.value===value;
  return <button onClick={()=>ctx.setValue(value)} className={`px-3 py-2 text-sm rounded-md ${active?'bg-slate-900 text-white':'text-slate-700'} ${className}`}>{children}</button>
}
export function TabsContent({ value, children }:{ value:string; children:React.ReactNode }){
  const ctx = React.useContext(TabsCtx)!; if(ctx.value!==value) return null; return <div>{children}</div>
}

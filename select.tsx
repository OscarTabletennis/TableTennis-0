
import * as React from 'react'
type Item = { value: string; label: string }
type Ctx = { value?: string; setValue?: (v:string)=>void; items: Item[]; register: (it:Item)=>void }
const Ctx = React.createContext<Ctx>({ items: [], register: ()=>{} })
export function Select({ value, onValueChange, children }:{ value?:string; onValueChange?:(v:string)=>void; children:React.ReactNode }){
  const [items, setItems] = React.useState<Item[]>([])
  const register = (it:Item)=> setItems(prev => prev.find(p=>p.value===it.value) ? prev : [...prev, it])
  return <Ctx.Provider value={{ value, setValue:onValueChange, items, register }}>{children}<HiddenSelect /></Ctx.Provider>
}
function HiddenSelect(){
  const ctx = React.useContext(Ctx)
  if(!ctx.setValue) return null
  return (
    <select value={ctx.value} onChange={(e)=>ctx.setValue!(e.target.value)} className="hidden">
      <option value="" />
      {ctx.items.map(it=> <option key={it.value} value={it.value}>{it.label}</option>)}
    </select>
  )
}
export const SelectTrigger: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ children }) => {
  return <button type="button" className="h-9 w-full rounded-md border border-slate-300 px-2 text-left">{children}</button>
}
export const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  return <span className="text-slate-500">{placeholder}</span>
}
export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="border rounded-md p-1 bg-white">{children}</div>
}
export function SelectItem({ value, children }:{ value:string; children:React.ReactNode }){
  const ctx = React.useContext(Ctx); React.useEffect(()=>{ ctx.register({ value, label: String(children) }) }, [value, children])
  return <button type="button" className="block w-full text-left px-2 py-1 hover:bg-slate-100 rounded" onClick={()=>ctx.setValue && ctx.setValue(value)}>{children}</button>
}

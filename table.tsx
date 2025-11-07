
import * as React from 'react'
export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (p)=> <table className={`w-full text-sm ${p.className||''}`} {...p}/>
export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (p)=> <thead {...p}/>
export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (p)=> <tbody {...p}/>
export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = (p)=> <tr className="border-b last:border-0" {...p}/>
export const TableHead: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = (p)=> <th className="text-left p-2 font-medium text-slate-600" {...p}/>
export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = (p)=> <td className="p-2" {...p}/>
export const TableCaption: React.FC<React.HTMLAttributes<HTMLTableCaptionElement>> = (p)=> <caption className="text-slate-400 text-xs p-2" {...p}/>

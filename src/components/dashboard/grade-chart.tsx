"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { semester: "Ganjil 22/23", rataRata: 78.5 },
  { semester: "Genap 22/23", rataRata: 80.2 },
  { semester: "Ganjil 23/24", rataRata: 82.1 },
  { semester: "Genap 23/24", rataRata: 83.5 },
  { semester: "Ganjil 24/25", rataRata: 85.4 },
]

export function GradeChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
        <XAxis dataKey="semester" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 5', 100]} />
        <Tooltip 
          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
        />
        <Line type="monotone" dataKey="rataRata" stroke="#53A6C4" strokeWidth={3} dot={{ r: 4, fill: "#53A6C4" }} activeDot={{ r: 6, fill: "#FDE047", stroke: "#FDE047" }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

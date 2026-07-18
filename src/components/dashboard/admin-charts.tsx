"use client"

import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts'

const revenueData = [
  { name: 'Jan', total: 12000000 },
  { name: 'Feb', total: 18000000 },
  { name: 'Mar', total: 15000000 },
  { name: 'Apr', total: 22000000 },
  { name: 'Mei', total: 28000000 },
  { name: 'Jun', total: 24000000 },
  { name: 'Jul', total: 42500000 },
]

const attendanceData = [
  { name: 'Hadir', value: 780, color: '#0d9488' }, // primary
  { name: 'Sakit', value: 35, color: '#eab308' }, // warning
  { name: 'Izin', value: 15, color: '#f97316' }, // secondary
  { name: 'Alpa', value: 12, color: '#ef4444' }, // error
]

export function RevenueAreaChart() {
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={revenueData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--outline-variant) / 0.5)" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--on-surface-variant))' }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--on-surface-variant))' }}
            tickFormatter={(value) => `Rp${(value / 1000000)}M`}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: 'hsl(var(--surface-container-lowest))',
              borderRadius: '12px',
              border: '1px solid hsl(var(--outline-variant))',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            itemStyle={{ color: 'hsl(var(--on-surface))', fontWeight: 'bold' }}
            formatter={(value: any) => [`Rp ${Number(value).toLocaleString('id-ID')}`, 'Pemasukan']}
          />
          <Area 
            type="monotone" 
            dataKey="total" 
            stroke="#0d9488" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorTotal)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function AttendanceDonutChart() {
  return (
    <div className="h-[300px] w-full mt-4 flex items-center justify-center relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-title-lg font-bold text-on-surface">92.6%</span>
        <span className="text-label-sm text-on-surface-variant">Kehadiran</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={attendanceData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={110}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {attendanceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
             contentStyle={{ 
              backgroundColor: 'hsl(var(--surface-container-lowest))',
              borderRadius: '12px',
              border: '1px solid hsl(var(--outline-variant))',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            itemStyle={{ color: 'hsl(var(--on-surface))', fontWeight: 'bold' }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle"
            formatter={(value, entry: any) => (
              <span className="text-label-sm text-on-surface-variant ml-1">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

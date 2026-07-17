import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, Clock } from "lucide-react"

export default function SchedulePage() {
  const scheduleDays = [
    { day: "Senin", classes: [
      { time: "07:30 - 09:00", subject: "Upacara & Wali Kelas", type: "other" },
      { time: "09:00 - 10:30", subject: "Matematika", type: "core" },
      { time: "10:30 - 11:00", subject: "Istirahat", type: "break" },
      { time: "11:00 - 12:30", subject: "Pendidikan Agama Islam", type: "core" },
    ]},
    { day: "Selasa", classes: [
      { time: "07:30 - 09:00", subject: "Ilmu Pengetahuan Alam", type: "core" },
      { time: "09:00 - 10:30", subject: "Bahasa Indonesia", type: "core" },
      { time: "10:30 - 11:00", subject: "Istirahat", type: "break" },
      { time: "11:00 - 12:30", subject: "Penjaskes (Olahraga)", type: "elective" },
    ]}
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Jadwal Kelas</h2>
          <p className="text-neutral-500 mt-1">Rencana pembelajaran mingguan.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {scheduleDays.map((schedule, idx) => (
          <Card key={idx} className="hover:shadow-md transition-shadow">
            <CardHeader className="border-b border-neutral-100 bg-neutral-50/50 pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-brand-hover" />
                Hari {schedule.day}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {schedule.classes.map((cls, i) => (
                  <div key={i} className={`flex items-start gap-4 p-3 rounded-xl border ${
                    cls.type === 'break' ? 'border-amber-100 bg-amber-50' : 
                    cls.type === 'core' ? 'border-brand/20 bg-brand-light' : 
                    'border-neutral-200 bg-white'
                  }`}>
                    <div className="flex items-center gap-1.5 text-sm font-semibold w-28 shrink-0 text-neutral-600">
                      <Clock className="w-3.5 h-3.5" />
                      {cls.time}
                    </div>
                    <div>
                      <div className={`font-semibold ${cls.type === 'break' ? 'text-amber-700' : 'text-neutral-900'}`}>
                        {cls.subject}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

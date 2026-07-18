import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AcademicLoading() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <div className="flex gap-4 border-b border-zinc-800 pb-2">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>

      <Card className="bg-zinc-950/50 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle><Skeleton className="h-6 w-[200px]" /></CardTitle>
          <Skeleton className="h-10 w-[120px] rounded-md" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-12 w-full rounded-md" />
          <Skeleton className="h-12 w-full rounded-md" />
          <Skeleton className="h-12 w-full rounded-md" />
          <Skeleton className="h-12 w-full rounded-md" />
          <Skeleton className="h-12 w-full rounded-md" />
        </CardContent>
      </Card>
    </div>
  )
}

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Users, DollarSign, Activity, CreditCard } from "lucide-react"

export default function StatsGrid() {
  const stats = [
    { title: "Total Users", value: "2,543", icon: <Users />, color: "text-blue-600" },
    { title: "Revenue", value: "$45,231", icon: <DollarSign />, color: "text-emerald-600" },
    { title: "Active Sessions", value: "1,120", icon: <Activity />, color: "text-amber-600" },
    { title: "Pending Task", value: "12", icon: <CreditCard />, color: "text-red-600" },
  ];

  return (
    // Grid Mastery: 1 col on mobile, 2 on tablet, 4 on desktop
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {stat.title}
            </CardTitle>
            <div className={`${stat.color} opacity-80`}>
              {stat.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-slate-400 mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

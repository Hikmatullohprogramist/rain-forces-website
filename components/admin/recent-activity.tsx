import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ActivityItem {
  id: number
  user: {
    name: string
    image?: string
  }
  action: string
  target: string
  date: string
}

const recentActivities: ActivityItem[] = [
  {
    id: 1,
    user: {
      name: "Admin User",
      image: "/placeholder.svg?height=32&width=32",
    },
    action: "updated",
    target: "Home Page",
    date: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Editor User",
      image: "/placeholder.svg?height=32&width=32",
    },
    action: "created",
    target: "New Project",
    date: "5 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Admin User",
      image: "/placeholder.svg?height=32&width=32",
    },
    action: "deleted",
    target: "Old Service",
    date: "1 day ago",
  },
  {
    id: 4,
    user: {
      name: "Author User",
    },
    action: "published",
    target: "About Us Page",
    date: "2 days ago",
  },
]

interface RecentActivityProps {
  extended?: boolean
}

export function RecentActivity({ extended = false }: RecentActivityProps) {
  const activities = extended ? [...recentActivities, ...recentActivities] : recentActivities

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.image || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{activity.user.name}</span>{" "}
              <span className="text-muted-foreground">{activity.action}</span>{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

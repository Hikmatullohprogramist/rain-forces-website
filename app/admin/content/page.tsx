import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function ContentPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Manage your portfolio projects</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Showcase your completed projects</p>
            <Button asChild>
              <Link href="/admin/content/projects">Manage</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>Manage your service offerings</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Define the services you provide</p>
            <Button asChild>
              <Link href="/admin/content/services">Manage</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Media Library</CardTitle>
            <CardDescription>Manage your images and files</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Upload and organize media assets</p>
            <Button asChild>
              <Link href="/admin/media">Manage</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <Link href="/admin/content/projects/create">
              <PlusCircle className="h-6 w-6" />
              <span>New Project</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <Link href="/admin/content/services/create">
              <PlusCircle className="h-6 w-6" />
              <span>New Service</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <Link href="/admin/about/team/create">
              <PlusCircle className="h-6 w-6" />
              <span>New Team Member</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <Link href="/admin/media">
              <PlusCircle className="h-6 w-6" />
              <span>Upload Media</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

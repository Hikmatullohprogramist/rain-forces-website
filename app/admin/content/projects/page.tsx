import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { ProjectsTable } from "@/components/admin/projects-table"
import { ProjectsTableSkeleton } from "@/components/admin/projects-table-skeleton"
import { getProjectsAction } from "@/lib/project-actions"

// Projects table with data fetching
async function ProjectsTableWithData({
  page = 1,
  limit = 10,
  status = "all",
  search = "",
  sortBy = "updatedAt",
  sortDirection = "desc",
}: {
  page?: number
  limit?: number
  status?: string
  search?: string
  sortBy?: string
  sortDirection?: string
}) {
  const {
    projects,
    total,
    page: currentPage,
    totalPages,
  } = await getProjectsAction({
    page,
    limit,
    status: status === "all" ? undefined : (status as any),
    search,
    sortBy: sortBy as any,
    sortDirection: sortDirection as any,
  })

  return (
    <ProjectsTable
      projects={projects}
      pagination={{
        total,
        page: currentPage,
        totalPages,
        limit,
      }}
      initialFilters={{
        status,
        search,
      }}
      initialSort={{
        sortBy,
        sortDirection,
      }}
    />
  )
}

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Parse search params
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const limit = typeof searchParams.limit === "string" ? Number.parseInt(searchParams.limit) : 10
  const status = typeof searchParams.status === "string" ? searchParams.status : "all"
  const search = typeof searchParams.search === "string" ? searchParams.search : ""
  const sortBy = typeof searchParams.sortBy === "string" ? searchParams.sortBy : "updatedAt"
  const sortDirection = typeof searchParams.sortDirection === "string" ? searchParams.sortDirection : "desc"

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects Management</h1>
        <Button asChild>
          <Link href="/admin/content/projects/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Manage your portfolio projects</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<ProjectsTableSkeleton />}>
            <ProjectsTableWithData
              page={page}
              limit={limit}
              status={status}
              search={search}
              sortBy={sortBy}
              sortDirection={sortDirection}
            />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

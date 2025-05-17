"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Edit,
  Eye,
  MoreHorizontal,
  Search,
  SortAsc,
  SortDesc,
  Trash,
  X,
} from "lucide-react"
import type { Project, SortDirection } from "@/lib/types"
import { deleteProjectAction } from "@/lib/project-actions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ProjectsTableProps {
  projects: Project[]
  pagination: {
    total: number
    page: number
    totalPages: number
    limit: number
  }
  initialFilters?: {
    status?: string
    search?: string
  }
  initialSort?: {
    sortBy?: string
    sortDirection?: string
  }
}

export function ProjectsTable({
  projects: initialProjects,
  pagination,
  initialFilters = {},
  initialSort = {},
}: ProjectsTableProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [feedback, setFeedback] = useState<{ message: string; type: "success" | "error" } | null>(null)

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState(initialFilters.search || "")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)
  const [statusFilter, setStatusFilter] = useState(initialFilters.status || "all")

  // Sorting state
  const [sortBy, setSortBy] = useState(initialSort.sortBy || "updatedAt")
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    (initialSort.sortDirection as SortDirection) || "desc",
  )

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // Update URL when filters or pagination change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    // Update search params
    if (debouncedSearchTerm) {
      params.set("search", debouncedSearchTerm)
    } else {
      params.delete("search")
    }

    // Update status filter
    if (statusFilter && statusFilter !== "all") {
      params.set("status", statusFilter)
    } else {
      params.delete("status")
    }

    // Update sort params
    if (sortBy && sortBy !== "updatedAt") {
      params.set("sortBy", sortBy)
    } else {
      params.delete("sortBy")
    }

    if (sortDirection && sortDirection !== "desc") {
      params.set("sortDirection", sortDirection)
    } else {
      params.delete("sortDirection")
    }

    // Keep page param if it exists
    if (params.toString() !== searchParams.toString()) {
      // Reset to page 1 when filters change
      params.set("page", "1")
      router.push(`${pathname}?${params.toString()}`)
    }
  }, [debouncedSearchTerm, statusFilter, sortBy, sortDirection, pathname, router, searchParams])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleDeleteClick = (id: string) => {
    setProjectToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return

    try {
      setIsDeleting(true)
      const result = await deleteProjectAction(projectToDelete)

      if (result.success) {
        setProjects(projects.filter((project) => project.id !== projectToDelete))
        setFeedback({ message: "Project deleted successfully", type: "success" })
        router.refresh()
      } else {
        setFeedback({ message: result.error || "Failed to delete project", type: "error" })
      }
    } catch (error) {
      console.error("Error deleting project:", error)
      setFeedback({ message: "An unexpected error occurred", type: "error" })
    } finally {
      setIsDeleting(false)
      setDeleteDialogOpen(false)
      setProjectToDelete(null)
    }
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleLimitChange = (limit: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("limit", limit)
    params.set("page", "1") // Reset to page 1
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleSortChange = (column: string) => {
    if (sortBy === column) {
      // Toggle direction if same column
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      // Default to desc for new column
      setSortBy(column)
      setSortDirection("desc")
    }
  }

  const clearSearch = () => {
    setSearchTerm("")
  }

  const clearFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setSortBy("updatedAt")
    setSortDirection("desc")

    // Reset URL to default
    router.push(pathname)
  }

  const renderSortIcon = (column: string) => {
    if (sortBy !== column) return null

    return sortDirection === "asc" ? (
      <SortAsc className="ml-1 h-4 w-4 inline" />
    ) : (
      <SortDesc className="ml-1 h-4 w-4 inline" />
    )
  }

  return (
    <>
      {feedback && (
        <div
          className={`mb-4 p-4 rounded-md ${
            feedback.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {feedback.message}
          <button className="ml-2 text-sm underline" onClick={() => setFeedback(null)}>
            Dismiss
          </button>
        </div>
      )}

      <div className="flex flex-col space-y-4">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            {(searchTerm || statusFilter !== "all" || sortBy !== "updatedAt" || sortDirection !== "desc") && (
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px] cursor-pointer" onClick={() => handleSortChange("title")}>
                  Title {renderSortIcon("title")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSortChange("category")}>
                  Category {renderSortIcon("category")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSortChange("status")}>
                  Status {renderSortIcon("status")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSortChange("updatedAt")}>
                  Last Updated {renderSortIcon("updatedAt")}
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.category}</TableCell>
                    <TableCell>
                      <Badge variant={project.status === "published" ? "default" : "outline"}>
                        {project.status === "published"
                          ? "Published"
                          : project.status === "draft"
                            ? "Draft"
                            : "Archived"}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(project.updatedAt)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/content/projects/edit/${project.id}`}>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/projects/${project.slug}`} target="_blank">
                              <Eye className="mr-2 h-4 w-4" />
                              <span>View</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDeleteClick(project.id)} className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No projects found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {pagination.total > 0 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
              {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} projects
            </div>

            <div className="flex items-center space-x-2">
              <Select value={pagination.limit.toString()} onValueChange={handleLimitChange}>
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(1)}
                  disabled={pagination.page === 1}
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <span className="text-sm">
                  Page {pagination.page} of {pagination.totalPages}
                </span>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(pagination.totalPages)}
                  disabled={pagination.page === pagination.totalPages}
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the project and remove it from the website.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

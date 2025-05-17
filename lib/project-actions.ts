"use server"

import { revalidatePath } from "next/cache"
import {
  getProjects as getProjectsDb,
  deleteProject as deleteProjectDb,
  getProjectById,
  updateProject as updateProjectDb,
  createProject as createProjectDb,
} from "./db-service"
import type { Project, ContentStatus, SortDirection } from "./types"

export type ProjectsParams = {
  page?: number
  limit?: number
  status?: ContentStatus | "all"
  search?: string
  sortBy?: keyof Project
  sortDirection?: SortDirection
}

export type ProjectsResponse = {
  projects: Project[]
  total: number
  page: number
  totalPages: number
  limit: number
}

export async function getProjectsAction(params: ProjectsParams = {}): Promise<ProjectsResponse> {
  try {
    const { projects, total, page, totalPages, limit } = await getProjectsDb({
      page: params.page || 1,
      limit: params.limit || 10,
      status: params.status === "all" ? undefined : params.status,
      search: params.search,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection,
    })

    return {
      projects,
      total,
      page,
      totalPages,
      limit,
    }
  } catch (error) {
    console.error("Error fetching projects:", error)
    return {
      projects: [],
      total: 0,
      page: 1,
      totalPages: 0,
      limit: 10,
    }
  }
}

export async function deleteProjectAction(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await deleteProjectDb(id)
    revalidatePath("/admin/content/projects")
    revalidatePath("/projects")
    return { success: result }
  } catch (error) {
    console.error("Error deleting project:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function updateProjectAction(
  id: string,
  data: Partial<Project>,
): Promise<{ success: boolean; error?: string; project?: Project }> {
  try {
    const project = await updateProjectDb(id, data)
    if (!project) {
      return { success: false, error: "Project not found" }
    }

    revalidatePath("/admin/content/projects")
    revalidatePath(`/admin/content/projects/edit/${id}`)
    revalidatePath("/projects")
    revalidatePath(`/projects/${project.slug}`)

    return { success: true, project }
  } catch (error) {
    console.error("Error updating project:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function createProjectAction(
  data: Omit<Project, "id" | "createdAt" | "updatedAt" | "createdBy">,
): Promise<{ success: boolean; error?: string; project?: Project }> {
  try {
    const project = await createProjectDb(data)

    revalidatePath("/admin/content/projects")
    revalidatePath("/projects")

    return { success: true, project }
  } catch (error) {
    console.error("Error creating project:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function getProjectAction(id: string): Promise<{ success: boolean; error?: string; project?: Project }> {
  try {
    const project = await getProjectById(id)
    if (!project) {
      return { success: false, error: "Project not found" }
    }

    return { success: true, project }
  } catch (error) {
    console.error("Error fetching project:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

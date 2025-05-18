"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import type {
  Project,
  Service,
  TeamMember,
  CompanyInfo,
  ContentStatus,
  PaginationParams,
  FilterParams,
  SortParams,
} from "./types"

// In a real application, this would be a database connection
// For this demo, we'll use localStorage-like storage in memory with the data persisted in cookies

// Initialize data store
let projects: Project[] = []
let services: Service[] = []
let teamMembers: TeamMember[] = []
let companyInfo: CompanyInfo | null = null

// Load data from cookies on server start
const initializeData = () => {
  try {
    const dataStore = cookies().get("rainforces-cms-data")?.value
    if (dataStore) {
      const data = JSON.parse(dataStore)
      projects = data.projects || []
      services = data.services || []
      teamMembers = data.teamMembers || []
      companyInfo = data.companyInfo || null
    } else {
      // Initialize with sample data if empty
      initializeSampleData()
    }
  } catch (error) {
    console.error("Error initializing data:", error)
    initializeSampleData()
  }
}

// Save data to cookies
const saveData = () => {
  try {
    const dataStore = JSON.stringify({
      projects,
      services,
      teamMembers,
      companyInfo,
    })

    cookies().set("rainforces-cms-data", dataStore, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })
  } catch (error) {
    console.error("Error saving data:", error)
  }
}

// Initialize with sample data
const initializeSampleData = () => {
  // Generate 25 sample projects for pagination testing
  projects = Array.from({ length: 25 }, (_, i) => ({
    id: (i + 1).toString(),
    title: `Project ${i + 1}`,
    slug: `project-${i + 1}`,
    description: `Description for project ${i + 1}`,
    content: `<p>Detailed content for project ${i + 1}</p>`,
    featuredImage: `/placeholder.svg?height=600&width=800&text=Project+${i + 1}`,
    status: i % 3 === 0 ? "published" : i % 3 === 1 ? "draft" : "archived",
    category: i % 2 === 0 ? "Residential" : "Commercial",
    location: i % 2 === 0 ? "Toronto, ON" : "Ottawa, ON",
    completionDate: new Date(2022, i % 12, (i % 28) + 1).toISOString().split("T")[0],
    client: `Client ${i + 1}`,
    tags: [`Tag ${i * 2 + 1}`, `Tag ${i * 2 + 2}`],
    galleryImages: [
      `/placeholder.svg?height=600&width=800&text=Gallery+${i * 3 + 1}`,
      `/placeholder.svg?height=600&width=800&text=Gallery+${i * 3 + 2}`,
    ],
    createdAt: new Date(2022, i % 12, (i % 28) + 1).toISOString(),
    updatedAt: new Date(2022, (i + 1) % 12, ((i + 1) % 28) + 1).toISOString(),
    createdBy: "admin",
  }))

  services = [
    {
      id: "1",
      title: "Building Restoration",
      slug: "building-restoration",
      description: "Comprehensive restoration services for damaged buildings and structures.",
      shortDescription: "Restore your building to its original glory",
      content:
        "<p>Our building restoration services are designed to bring damaged buildings back to their original condition or better. We specialize in restoring buildings affected by water damage, fire damage, structural issues, and more.</p><p>Our experienced team uses the latest techniques and high-quality materials to ensure lasting results.</p>",
      featuredImage: "/placeholder.svg?height=600&width=800",
      icon: "tool",
      features: [
        "Water damage restoration",
        "Fire damage restoration",
        "Structural restoration",
        "Facade restoration",
        "Historic building restoration",
      ],
      status: "published",
      order: 1,
      createdAt: "2022-01-20T14:20:00Z",
      updatedAt: "2022-02-25T10:10:00Z",
      createdBy: "admin",
    },
    {
      id: "2",
      title: "Building Repairs",
      slug: "building-repairs",
      description: "Professional repair services for all types of building issues.",
      shortDescription: "Fix structural and cosmetic issues",
      content:
        "<p>Our expert repair services address specific issues in your building to prevent further damage and ensure the safety and functionality of your property. We handle everything from minor repairs to major structural fixes.</p><p>Our team is equipped to handle a wide range of repair needs efficiently and effectively.</p>",
      featuredImage: "/placeholder.svg?height=600&width=800",
      icon: "wrench",
      features: ["Concrete repairs", "Masonry repairs", "Roof repairs", "Foundation repairs", "Structural repairs"],
      status: "published",
      order: 2,
      createdAt: "2022-01-25T09:15:00Z",
      updatedAt: "2022-02-28T11:20:00Z",
      createdBy: "admin",
    },
  ]

  teamMembers = [
    {
      id: "1",
      name: "Mehriddin Gadoyev",
      position: "Founder & CEO",
      bio: "With over 20 years of experience in the construction industry, Mehrddin founded RainForces in 2007 with a vision to provide high-quality building restoration and rehabilitation services to the Ontario community.",
      image: "/images/mehriddin-gadoyev.jpg",
      email: "mehrddin@rainforces.com",
      phone: "(123) 456-7890",
      socialLinks: {
        linkedin: "https://linkedin.com/in/mehrddin-gadoyev",
      },
      order: 1,
    },
    {
      id: "2",
      name: "Jane Smith",
      position: "Project Manager",
      bio: "Jane has been with RainForces for over 8 years and has successfully managed numerous large-scale restoration projects. Her attention to detail and commitment to client satisfaction have been key to our success.",
      image: "/placeholder.svg?height=400&width=400",
      email: "jane@rainforces.com",
      phone: "(123) 456-7891",
      socialLinks: {
        linkedin: "https://linkedin.com/in/jane-smith",
      },
      order: 2,
    },
  ]

  companyInfo = {
    name: "Rain Forest",
    slogan: "Building restoration and rehabilitation services",
    description:
      "Rain Forest specializes in building restoration and rehabilitation services for residential and commercial buildings in Ontario since 2007.",
    foundedYear: 2007,
    mission:
      "Our mission is to provide high-quality building restoration and rehabilitation services that exceed our clients' expectations while maintaining the highest standards of professionalism, integrity, and craftsmanship.",
    vision:
      "To be the leading building restoration and rehabilitation company in Ontario, known for our exceptional quality, reliability, and customer service.",
    values: [
      {
        title: "Quality",
        description: "We are committed to delivering the highest quality workmanship in every project we undertake.",
        icon: "check-circle",
      },
      {
        title: "Customer Focus",
        description: "We prioritize our clients' needs and strive to exceed their expectations in every interaction.",
        icon: "users",
      },
      {
        title: "Excellence",
        description: "We pursue excellence in all aspects of our work, from planning to execution and follow-up.",
        icon: "award",
      },
      {
        title: "Reliability",
        description: "We honor our commitments and deliver our services on time and within budget.",
        icon: "clock",
      },
    ],
    contactInfo: {
      email: "info@rainforces.com",
      phone: "(123) 456-7890",
      address: "14-1085 Bellamy Rd N Toronto, Ontario, M1H 3C7",
      mapCoordinates: {
        lat: 43.7615,
        lng: -79.2515,
      },
    },
    socialLinks: {
      facebook: "https://facebook.com/rainforces",
      instagram: "https://instagram.com/rainforces",
      linkedin: "https://linkedin.com/company/rainforces",
    },
  }

  saveData()
}

// Initialize data on module load
initializeData()

// Helper function to filter projects
const filterProjects = (projectsList: Project[], filters: FilterParams): Project[] => {
  let filtered = [...projectsList]

  // Filter by status
  if (filters.status) {
    filtered = filtered.filter((project) => project.status === filters.status)
  }

  // Filter by search term
  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.category.toLowerCase().includes(searchLower) ||
        project.location.toLowerCase().includes(searchLower) ||
        (project.client && project.client.toLowerCase().includes(searchLower)) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
    )
  }

  return filtered
}

// Helper function to sort projects
const sortProjects = (projectsList: Project[], sortParams: SortParams): Project[] => {
  if (!sortParams.sortBy) return projectsList

  const direction = sortParams.sortDirection === "desc" ? -1 : 1

  return [...projectsList].sort((a, b) => {
    const aValue = a[sortParams.sortBy as keyof Project]
    const bValue = b[sortParams.sortBy as keyof Project]

    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction * aValue.localeCompare(bValue)
    }

    if (aValue < bValue) return -1 * direction
    if (aValue > bValue) return 1 * direction
    return 0
  })
}

// Helper function to paginate projects
const paginateProjects = (
  projectsList: Project[],
  paginationParams: PaginationParams,
): {
  projects: Project[]
  total: number
  page: number
  totalPages: number
  limit: number
} => {
  const page = paginationParams.page || 1
  const limit = paginationParams.limit || 10
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  return {
    projects: projectsList.slice(startIndex, endIndex),
    total: projectsList.length,
    page,
    totalPages: Math.ceil(projectsList.length / limit),
    limit,
  }
}

// Projects CRUD operations with pagination, filtering, and sorting
export async function getProjects(params: PaginationParams & FilterParams & SortParams = {}): Promise<{
  projects: Project[]
  total: number
  page: number
  totalPages: number
  limit: number
}> {
  try {
    // Apply filters
    let filteredProjects = filterProjects(projects, {
      status: params.status,
      search: params.search,
    })

    // Apply sorting
    filteredProjects = sortProjects(filteredProjects, {
      sortBy: params.sortBy,
      sortDirection: params.sortDirection,
    })

    // Apply pagination
    return paginateProjects(filteredProjects, {
      page: params.page,
      limit: params.limit,
    })
  } catch (error) {
    console.error("Error getting projects:", error)
    return {
      projects: [],
      total: 0,
      page: 1,
      totalPages: 0,
      limit: 10,
    }
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((project) => project.slug === slug) || null
}

export async function getProjectById(id: string): Promise<Project | null> {
  return projects.find((project) => project.id === id) || null
}

export async function createProject(
  project: Omit<Project, "id" | "createdAt" | "updatedAt" | "createdBy">,
): Promise<Project> {
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: "admin", // In a real app, this would be the current user's ID
  }

  projects.push(newProject)
  saveData()
  revalidatePath("/projects")
  revalidatePath("/admin/content")

  return newProject
}

export async function updateProject(id: string, project: Partial<Project>): Promise<Project | null> {
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) return null

  projects[index] = {
    ...projects[index],
    ...project,
    updatedAt: new Date().toISOString(),
  }

  saveData()
  revalidatePath("/projects")
  revalidatePath(`/projects/${projects[index].slug}`)
  revalidatePath("/admin/content")

  return projects[index]
}

export async function deleteProject(id: string): Promise<boolean> {
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) return false

  const slug = projects[index].slug
  projects.splice(index, 1)

  saveData()
  revalidatePath("/projects")
  revalidatePath(`/projects/${slug}`)
  revalidatePath("/admin/content")

  return true
}

// Services CRUD operations
export async function getServices(status?: ContentStatus): Promise<Service[]> {
  if (status) {
    return services.filter((service) => service.status === status)
  }
  return services
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return services.find((service) => service.slug === slug) || null
}

export async function getServiceById(id: string): Promise<Service | null> {
  return services.find((service) => service.id === id) || null
}

export async function createService(
  service: Omit<Service, "id" | "createdAt" | "updatedAt" | "createdBy">,
): Promise<Service> {
  const newService: Service = {
    ...service,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: "admin", // In a real app, this would be the current user's ID
  }

  services.push(newService)
  saveData()
  revalidatePath("/services")
  revalidatePath("/admin/content")

  return newService
}

export async function updateService(id: string, service: Partial<Service>): Promise<Service | null> {
  const index = services.findIndex((s) => s.id === id)
  if (index === -1) return null

  services[index] = {
    ...services[index],
    ...service,
    updatedAt: new Date().toISOString(),
  }

  saveData()
  revalidatePath("/services")
  revalidatePath(`/services/${services[index].slug}`)
  revalidatePath("/admin/content")

  return services[index]
}

export async function deleteService(id: string): Promise<boolean> {
  const index = services.findIndex((s) => s.id === id)
  if (index === -1) return false

  const slug = services[index].slug
  services.splice(index, 1)

  saveData()
  revalidatePath("/services")
  revalidatePath(`/services/${slug}`)
  revalidatePath("/admin/content")

  return true
}

// Team Members CRUD operations
export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers
}

export async function getTeamMemberById(id: string): Promise<TeamMember | null> {
  return teamMembers.find((member) => member.id === id) || null
}

export async function createTeamMember(member: Omit<TeamMember, "id">): Promise<TeamMember> {
  const newMember: TeamMember = {
    ...member,
    id: Date.now().toString(),
  }

  teamMembers.push(newMember)
  saveData()
  revalidatePath("/about")
  revalidatePath("/admin/about")

  return newMember
}

export async function updateTeamMember(id: string, member: Partial<TeamMember>): Promise<TeamMember | null> {
  const index = teamMembers.findIndex((m) => m.id === id)
  if (index === -1) return null

  teamMembers[index] = {
    ...teamMembers[index],
    ...member,
  }

  saveData()
  revalidatePath("/about")
  revalidatePath("/admin/about")

  return teamMembers[index]
}

export async function deleteTeamMember(id: string): Promise<boolean> {
  const index = teamMembers.findIndex((m) => m.id === id)
  if (index === -1) return false

  teamMembers.splice(index, 1)

  saveData()
  revalidatePath("/about")
  revalidatePath("/admin/about")

  return true
}

// Company Info operations
export async function getCompanyInfo(): Promise<CompanyInfo | null> {
  return companyInfo
}

export async function updateCompanyInfo(info: Partial<CompanyInfo>): Promise<CompanyInfo | null> {
  if (!companyInfo) return null

  companyInfo = {
    ...companyInfo,
    ...info,
  }

  saveData()
  revalidatePath("/about")
  revalidatePath("/admin/about")

  return companyInfo
}

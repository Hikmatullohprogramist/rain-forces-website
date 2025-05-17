// Common types for content management

export type ContentStatus = "draft" | "published" | "archived"
export type SortDirection = "asc" | "desc"

export interface BaseContent {
  id: string
  title: string
  slug: string
  description: string
  content: string
  featuredImage?: string
  status: ContentStatus
  createdAt: string
  updatedAt: string
  createdBy: string
}

export interface Project extends BaseContent {
  category: string
  location: string
  completionDate?: string
  client?: string
  tags: string[]
  galleryImages?: string[]
}

export interface Service extends BaseContent {
  icon: string
  shortDescription: string
  features: string[]
  order: number
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image?: string
  email?: string
  phone?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
  order: number
}

export interface CompanyInfo {
  name: string
  slogan: string
  description: string
  foundedYear: number
  mission: string
  vision: string
  values: Array<{
    title: string
    description: string
    icon: string
  }>
  contactInfo: {
    email: string
    phone: string
    address: string
    mapCoordinates?: {
      lat: number
      lng: number
    }
  }
  socialLinks: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
}

export interface PaginationParams {
  page?: number
  limit?: number
}

export interface FilterParams {
  status?: ContentStatus
  search?: string
}

export interface SortParams {
  sortBy?: string
  sortDirection?: SortDirection
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  totalPages: number
  limit: number
}

"use server"

// This is a simplified content management implementation for demonstration purposes
// In a real application, you would use a database to store and retrieve content

type ContentType = "page" | "project" | "service"

export type ContentItem = {
  id: string
  title: string
  slug: string
  type: ContentType
  description: string
  content: string
  featuredImage?: string
  status: "draft" | "published"
  createdAt: string
  updatedAt: string
  author: {
    name: string
    id: string
  }
}

// Mock content data
const mockContent: ContentItem[] = [
  {
    id: "1",
    title: "Home Page",
    slug: "/",
    type: "page",
    description: "Main landing page",
    content: "<p>Welcome to Rain Forest</p>",
    status: "published",
    createdAt: "2023-01-15T12:00:00Z",
    updatedAt: "2023-02-20T14:30:00Z",
    author: {
      name: "Admin User",
      id: "1",
    },
  },
  {
    id: "2",
    title: "About Us",
    slug: "/about",
    type: "page",
    description: "About our company",
    content: "<p>Learn about Rain Forest</p>",
    status: "published",
    createdAt: "2023-01-16T10:00:00Z",
    updatedAt: "2023-02-21T09:15:00Z",
    author: {
      name: "Admin User",
      id: "1",
    },
  },
  {
    id: "3",
    title: "Commercial Building Rehabilitation",
    slug: "/projects/commercial-building",
    type: "project",
    description: "Comprehensive rehabilitation of a commercial office building",
    content: "<p>Project details here</p>",
    featuredImage: "/placeholder.svg?height=600&width=800",
    status: "published",
    createdAt: "2023-02-10T11:30:00Z",
    updatedAt: "2023-03-05T16:45:00Z",
    author: {
      name: "Admin User",
      id: "1",
    },
  },
  {
    id: "4",
    title: "Restoration Services",
    slug: "/services/restoration",
    type: "service",
    description: "Our building restoration services",
    content: "<p>Service details here</p>",
    featuredImage: "/placeholder.svg?height=400&width=600",
    status: "published",
    createdAt: "2023-01-20T14:20:00Z",
    updatedAt: "2023-02-25T10:10:00Z",
    author: {
      name: "Admin User",
      id: "1",
    },
  },
]

export async function getContentItems(type?: ContentType): Promise<ContentItem[]> {
  // In a real application, you would fetch content from a database
  // For demo purposes, we'll return mock data

  if (type) {
    return mockContent.filter((item) => item.type === type)
  }

  return mockContent
}

export async function getContentItem(id: string): Promise<ContentItem | null> {
  // In a real application, you would fetch the content item from a database
  const item = mockContent.find((item) => item.id === id)
  return item || null
}

export async function createContent(data: Partial<ContentItem>): Promise<ContentItem> {
  // In a real application, you would save the content to a database
  // For demo purposes, we'll just return the data with some defaults

  const newItem: ContentItem = {
    id: Math.random().toString(36).substring(2, 9),
    title: data.title || "Untitled",
    slug: data.slug || `/untitled-${Date.now()}`,
    type: (data.type as ContentType) || "page",
    description: data.description || "",
    content: data.content || "",
    featuredImage: data.featuredImage,
    status: (data.status as "draft" | "published") || "draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      name: "Admin User",
      id: "1",
    },
  }

  // In a real app, you would add this to the database
  // mockContent.push(newItem)

  return newItem
}

export async function updateContent(id: string, data: Partial<ContentItem>): Promise<ContentItem | null> {
  // In a real application, you would update the content in a database
  const itemIndex = mockContent.findIndex((item) => item.id === id)

  if (itemIndex === -1) {
    return null
  }

  const updatedItem = {
    ...mockContent[itemIndex],
    ...data,
    updatedAt: new Date().toISOString(),
  }

  // In a real app, you would update this in the database
  // mockContent[itemIndex] = updatedItem

  return updatedItem
}

export async function deleteContent(id: string): Promise<boolean> {
  // In a real application, you would delete the content from a database
  const itemIndex = mockContent.findIndex((item) => item.id === id)

  if (itemIndex === -1) {
    return false
  }

  // In a real app, you would remove this from the database
  // mockContent.splice(itemIndex, 1)

  return true
}

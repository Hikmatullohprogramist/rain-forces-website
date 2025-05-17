"use server"

// This is a simplified user management implementation for demonstration purposes
// In a real application, you would use a database to store and retrieve users

export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "editor" | "author" | "viewer"
  isActive: boolean
  createdAt: string
  lastLogin?: string
}

// Mock user data
const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    isActive: true,
    createdAt: "2023-01-01T00:00:00Z",
    lastLogin: "2023-05-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Editor User",
    email: "editor@example.com",
    role: "editor",
    isActive: true,
    createdAt: "2023-02-15T00:00:00Z",
    lastLogin: "2023-05-10T14:20:00Z",
  },
  {
    id: "3",
    name: "Author User",
    email: "author@example.com",
    role: "author",
    isActive: true,
    createdAt: "2023-03-10T00:00:00Z",
    lastLogin: "2023-05-12T09:45:00Z",
  },
]

export async function getUsers(): Promise<User[]> {
  // In a real application, you would fetch users from a database
  return mockUsers
}

export async function getUser(id: string): Promise<User | null> {
  // In a real application, you would fetch the user from a database
  const user = mockUsers.find((user) => user.id === id)
  return user || null
}

export async function createUser(data: {
  name: string
  email: string
  password: string
  role: string
  isActive: boolean
}): Promise<User> {
  // In a real application, you would save the user to a database
  // and hash the password

  const newUser: User = {
    id: Math.random().toString(36).substring(2, 9),
    name: data.name,
    email: data.email,
    role: data.role as "admin" | "editor" | "author" | "viewer",
    isActive: data.isActive,
    createdAt: new Date().toISOString(),
  }

  // In a real app, you would add this to the database
  // mockUsers.push(newUser)

  return newUser
}

export async function updateUser(id: string, data: Partial<User>): Promise<User | null> {
  // In a real application, you would update the user in a database
  const userIndex = mockUsers.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    return null
  }

  const updatedUser = {
    ...mockUsers[userIndex],
    ...data,
  }

  // In a real app, you would update this in the database
  // mockUsers[userIndex] = updatedUser

  return updatedUser
}

export async function deleteUser(id: string): Promise<boolean> {
  // In a real application, you would delete the user from a database
  const userIndex = mockUsers.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    return false
  }

  // In a real app, you would remove this from the database
  // mockUsers.splice(userIndex, 1)

  return true
}

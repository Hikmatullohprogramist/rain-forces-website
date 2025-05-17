"use server"

import { cookies } from "next/headers"

// This is a simplified auth implementation for demonstration purposes
// In a real application, you would use a proper authentication library and database

type LoginResult = {
  success: boolean
  message?: string
}

export async function loginUser(email: string, password: string): Promise<LoginResult> {
  // In a real application, you would verify credentials against a database
  // For demo purposes, we'll accept a hardcoded credential

  if (email === "admin@example.com" && password === "password") {
    // Set a cookie to maintain the session
    cookies().set("admin-session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return {
      success: true,
    }
  }

  return {
    success: false,
    message: "Invalid email or password",
  }
}

export async function logoutUser(): Promise<void> {
  cookies().delete("admin-session")
}

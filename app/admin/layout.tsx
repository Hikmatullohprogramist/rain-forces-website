import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminHeader from "@/components/admin/admin-header"
import { getServerSession } from "@/lib/auth"

// This is a Server Component, so we can use async/await
export default async function AdminLayout({ children }: { children: ReactNode }) {
  // Check if user is authenticated and has admin access
  const session = await getServerSession()

  // If no session or user is not an admin, redirect to login
  if (!session || !session.user || session.user.role !== "admin") {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminHeader user={session.user} />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  BarChart3,
  ImageIcon,
  LogOut,
  Menu,
  X,
  Briefcase,
  Wrench,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"

const navItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    name: "Content",
    href: "/admin/content",
    icon: <FileText className="h-5 w-5" />,
    subItems: [
      {
        name: "Projects",
        href: "/admin/content/projects",
        icon: <Briefcase className="h-4 w-4" />,
      },
      {
        name: "Services",
        href: "/admin/content/services",
        icon: <Wrench className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Media",
    href: "/admin/media",
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    name: "About Us",
    href: "/admin/about",
    icon: <Info className="h-5 w-5" />,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleSubItems = (href: string) => {
    setExpandedItems((prev) => (prev.includes(href) ? prev.filter((item) => item !== href) : [...prev, href]))
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Button
          variant="default"
          size="icon"
          className="rounded-full shadow-lg"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <motion.div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 ease-in-out lg:relative",
          isCollapsed && "lg:w-20",
          isCollapsed && "-translate-x-full lg:translate-x-0",
        )}
        animate={{
          width: isCollapsed ? "5rem" : "16rem",
          x: isCollapsed && window.innerWidth < 1024 ? "-100%" : 0,
        }}
      >
        <div className="p-4 flex items-center justify-between">
          <Link href="/admin" className={cn("font-bold text-xl", isCollapsed && "lg:hidden")}>
            Admin Panel
          </Link>
          <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.href} className="space-y-1">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleSubItems(item.href)}
                    className={cn(
                      "flex items-center w-full px-3 py-2 rounded-md transition-colors",
                      isActive(item.href)
                        ? "bg-gray-100 dark:bg-gray-800 text-blue-900 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                      isCollapsed && "lg:justify-center",
                    )}
                  >
                    {item.icon}
                    <span className={cn("ml-3 flex-1", isCollapsed && "lg:hidden")}>{item.name}</span>
                    {!isCollapsed && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          expandedItems.includes(item.href) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {expandedItems.includes(item.href) && !isCollapsed && (
                    <div className="ml-6 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "flex items-center px-3 py-2 rounded-md transition-colors",
                            isActive(subItem.href)
                              ? "bg-gray-100 dark:bg-gray-800 text-blue-900 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                          )}
                        >
                          {subItem.icon}
                          <span className="ml-3">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md transition-colors",
                    isActive(item.href)
                      ? "bg-gray-100 dark:bg-gray-800 text-blue-900 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                    isCollapsed && "lg:justify-center",
                  )}
                >
                  {item.icon}
                  <span className={cn("ml-3", isCollapsed && "lg:hidden")}>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",
              isCollapsed && "lg:justify-center",
            )}
            onClick={() => {
              // Handle logout
            }}
          >
            <LogOut className="h-5 w-5" />
            <span className={cn("ml-3", isCollapsed && "lg:hidden")}>Logout</span>
          </Button>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsCollapsed(true)} />
      )}
    </>
  )
}

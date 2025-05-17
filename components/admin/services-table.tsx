"use client"

import { useState } from "react"
import Link from "next/link"
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
import { Edit, MoreHorizontal, Trash, Eye, ArrowUp, ArrowDown } from "lucide-react"
import type { Service } from "@/lib/types"
import { deleteService, updateService } from "@/lib/db-service"
import { useRouter } from "next/navigation"
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

interface ServicesTableProps {
  services: Service[]
}

export function ServicesTable({ services: initialServices }: ServicesTableProps) {
  const [services, setServices] = useState(initialServices)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null)
  const router = useRouter()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleDeleteClick = (id: string) => {
    setServiceToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!serviceToDelete) return

    try {
      await deleteService(serviceToDelete)
      setServices(services.filter((service) => service.id !== serviceToDelete))
      router.refresh()
    } catch (error) {
      console.error("Error deleting service:", error)
    } finally {
      setDeleteDialogOpen(false)
      setServiceToDelete(null)
    }
  }

  const handleMoveUp = async (id: string) => {
    const index = services.findIndex((service) => service.id === id)
    if (index <= 0) return

    const updatedServices = [...services]
    const currentOrder = updatedServices[index].order
    const prevOrder = updatedServices[index - 1].order

    try {
      await updateService(id, { order: prevOrder })
      await updateService(updatedServices[index - 1].id, { order: currentOrder })

      // Update local state
      updatedServices[index].order = prevOrder
      updatedServices[index - 1].order = currentOrder
      updatedServices.sort((a, b) => a.order - b.order)

      setServices(updatedServices)
      router.refresh()
    } catch (error) {
      console.error("Error reordering services:", error)
    }
  }

  const handleMoveDown = async (id: string) => {
    const index = services.findIndex((service) => service.id === id)
    if (index >= services.length - 1) return

    const updatedServices = [...services]
    const currentOrder = updatedServices[index].order
    const nextOrder = updatedServices[index + 1].order

    try {
      await updateService(id, { order: nextOrder })
      await updateService(updatedServices[index + 1].id, { order: currentOrder })

      // Update local state
      updatedServices[index].order = nextOrder
      updatedServices[index + 1].order = currentOrder
      updatedServices.sort((a, b) => a.order - b.order)

      setServices(updatedServices)
      router.refresh()
    } catch (error) {
      console.error("Error reordering services:", error)
    }
  }

  // Sort services by order
  const sortedServices = [...services].sort((a, b) => a.order - b.order)

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Order</TableHead>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead>Short Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedServices.length > 0 ? (
              sortedServices.map((service, index) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleMoveUp(service.id)}
                        disabled={index === 0}
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleMoveDown(service.id)}
                        disabled={index === sortedServices.length - 1}
                      >
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{service.shortDescription}</TableCell>
                  <TableCell>
                    <Badge variant={service.status === "published" ? "default" : "outline"}>
                      {service.status === "published" ? "Published" : service.status === "draft" ? "Draft" : "Archived"}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(service.updatedAt)}</TableCell>
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
                          <Link href={`/admin/content/services/edit/${service.id}`}>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/services/${service.slug}`} target="_blank">
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDeleteClick(service.id)} className="text-red-600">
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
                <TableCell colSpan={6} className="h-24 text-center">
                  No services found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the service and remove it from the website.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

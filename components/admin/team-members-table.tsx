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
import { Edit, MoreHorizontal, Trash, ArrowUp, ArrowDown } from "lucide-react"
import type { TeamMember } from "@/lib/types"
import { deleteTeamMember, updateTeamMember } from "@/lib/db-service"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMembersTableProps {
  teamMembers: TeamMember[]
}

export function TeamMembersTable({ teamMembers: initialTeamMembers }: TeamMembersTableProps) {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [memberToDelete, setMemberToDelete] = useState<string | null>(null)
  const router = useRouter()

  const handleDeleteClick = (id: string) => {
    setMemberToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!memberToDelete) return

    try {
      await deleteTeamMember(memberToDelete)
      setTeamMembers(teamMembers.filter((member) => member.id !== memberToDelete))
      router.refresh()
    } catch (error) {
      console.error("Error deleting team member:", error)
    } finally {
      setDeleteDialogOpen(false)
      setMemberToDelete(null)
    }
  }

  const handleMoveUp = async (id: string) => {
    const index = teamMembers.findIndex((member) => member.id === id)
    if (index <= 0) return

    const updatedMembers = [...teamMembers]
    const currentOrder = updatedMembers[index].order
    const prevOrder = updatedMembers[index - 1].order

    try {
      await updateTeamMember(id, { order: prevOrder })
      await updateTeamMember(updatedMembers[index - 1].id, { order: currentOrder })

      // Update local state
      updatedMembers[index].order = prevOrder
      updatedMembers[index - 1].order = currentOrder
      updatedMembers.sort((a, b) => a.order - b.order)

      setTeamMembers(updatedMembers)
      router.refresh()
    } catch (error) {
      console.error("Error reordering team members:", error)
    }
  }

  const handleMoveDown = async (id: string) => {
    const index = teamMembers.findIndex((member) => member.id === id)
    if (index >= teamMembers.length - 1) return

    const updatedMembers = [...teamMembers]
    const currentOrder = updatedMembers[index].order
    const nextOrder = updatedMembers[index + 1].order

    try {
      await updateTeamMember(id, { order: nextOrder })
      await updateTeamMember(updatedMembers[index + 1].id, { order: currentOrder })

      // Update local state
      updatedMembers[index].order = nextOrder
      updatedMembers[index + 1].order = currentOrder
      updatedMembers.sort((a, b) => a.order - b.order)

      setTeamMembers(updatedMembers)
      router.refresh()
    } catch (error) {
      console.error("Error reordering team members:", error)
    }
  }

  // Sort team members by order
  const sortedMembers = [...teamMembers].sort((a, b) => a.order - b.order)

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Order</TableHead>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedMembers.length > 0 ? (
              sortedMembers.map((member, index) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleMoveUp(member.id)}
                        disabled={index === 0}
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleMoveDown(member.id)}
                        disabled={index === sortedMembers.length - 1}
                      >
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.email || "N/A"}</TableCell>
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
                          <Link href={`/admin/about/team/edit/${member.id}`}>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDeleteClick(member.id)} className="text-red-600">
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
                  No team members found.
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
              This action cannot be undone. This will permanently delete the team member and remove them from the
              website.
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

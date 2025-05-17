import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { getServices } from "@/lib/db-service"
import { ServicesTable } from "@/components/admin/services-table"

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Services Management</h1>
        <Button asChild>
          <Link href="/admin/content/services/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Service
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
          <CardDescription>Manage your service offerings</CardDescription>
        </CardHeader>
        <CardContent>
          <ServicesTable services={services} />
        </CardContent>
      </Card>
    </div>
  )
}

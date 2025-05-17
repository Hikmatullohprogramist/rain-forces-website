import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { getCompanyInfo, getTeamMembers } from "@/lib/db-service"
import { TeamMembersTable } from "@/components/admin/team-members-table"
import { CompanyInfoForm } from "@/components/admin/company-info-form"

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()
  const companyInfo = await getCompanyInfo()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">About Us Management</h1>
      </div>

      <Tabs defaultValue="company" className="space-y-4">
        <TabsList>
          <TabsTrigger value="company">Company Information</TabsTrigger>
          <TabsTrigger value="team">Team Members</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Manage your company details and contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <CompanyInfoForm companyInfo={companyInfo} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Team Members</h2>
            <Button asChild>
              <Link href="/admin/about/team/create">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Team Member
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <TeamMembersTable teamMembers={teamMembers} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

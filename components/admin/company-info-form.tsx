"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { CompanyInfo } from "@/lib/types"
import { updateCompanyInfo } from "@/lib/db-service"
import { X, Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

interface CompanyInfoFormProps {
  companyInfo: CompanyInfo | null
}

export function CompanyInfoForm({ companyInfo }: CompanyInfoFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<CompanyInfo>(
    companyInfo || {
      name: "",
      slogan: "",
      description: "",
      foundedYear: new Date().getFullYear(),
      mission: "",
      vision: "",
      values: [],
      contactInfo: {
        email: "",
        phone: "",
        address: "",
      },
      socialLinks: {},
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [name]: value,
      },
    }))
  }

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }))
  }

  const handleValueChange = (index: number, field: string, value: string) => {
    const updatedValues = [...formData.values]
    updatedValues[index] = {
      ...updatedValues[index],
      [field]: value,
    }
    setFormData((prev) => ({ ...prev, values: updatedValues }))
  }

  const addValue = () => {
    setFormData((prev) => ({
      ...prev,
      values: [
        ...prev.values,
        {
          title: "",
          description: "",
          icon: "check-circle",
        },
      ],
    }))
  }

  const removeValue = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      values: prev.values.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await updateCompanyInfo(formData)
      toast({
        title: "Success",
        description: "Company information updated successfully",
      })
      router.refresh()
    } catch (error) {
      console.error("Error updating company info:", error)
      toast({
        title: "Error",
        description: "Failed to update company information",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Company Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slogan">Slogan</Label>
            <Input
              id="slogan"
              name="slogan"
              value={formData.slogan}
              onChange={handleChange}
              placeholder="Enter company slogan"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter company description"
            rows={3}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="foundedYear">Founded Year</Label>
          <Input
            id="foundedYear"
            name="foundedYear"
            type="number"
            value={formData.foundedYear}
            onChange={(e) => setFormData((prev) => ({ ...prev, foundedYear: Number.parseInt(e.target.value) }))}
            placeholder="Enter founded year"
            required
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Mission & Vision</h3>
        <div className="space-y-2">
          <Label htmlFor="mission">Mission</Label>
          <Textarea
            id="mission"
            name="mission"
            value={formData.mission}
            onChange={handleChange}
            placeholder="Enter company mission"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vision">Vision</Label>
          <Textarea
            id="vision"
            name="vision"
            value={formData.vision}
            onChange={handleChange}
            placeholder="Enter company vision"
            rows={3}
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Company Values</h3>
          <Button type="button" variant="outline" size="sm" onClick={addValue}>
            <Plus className="mr-2 h-4 w-4" />
            Add Value
          </Button>
        </div>

        {formData.values.map((value, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-md relative">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6"
              onClick={() => removeValue(index)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`value-title-${index}`}>Title</Label>
                <Input
                  id={`value-title-${index}`}
                  value={value.title}
                  onChange={(e) => handleValueChange(index, "title", e.target.value)}
                  placeholder="Value title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`value-icon-${index}`}>Icon</Label>
                <Input
                  id={`value-icon-${index}`}
                  value={value.icon}
                  onChange={(e) => handleValueChange(index, "icon", e.target.value)}
                  placeholder="Icon name (e.g., check-circle)"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`value-description-${index}`}>Description</Label>
              <Textarea
                id={`value-description-${index}`}
                value={value.description}
                onChange={(e) => handleValueChange(index, "description", e.target.value)}
                placeholder="Value description"
                rows={2}
                required
              />
            </div>
          </div>
        ))}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.contactInfo.email}
              onChange={handleContactChange}
              placeholder="Enter contact email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.contactInfo.phone}
              onChange={handleContactChange}
              placeholder="Enter contact phone"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.contactInfo.address}
            onChange={handleContactChange}
            placeholder="Enter company address"
            rows={2}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="lat">Map Latitude</Label>
            <Input
              id="lat"
              name="lat"
              type="number"
              step="any"
              value={formData.contactInfo.mapCoordinates?.lat || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contactInfo: {
                    ...prev.contactInfo,
                    mapCoordinates: {
                      ...prev.contactInfo.mapCoordinates,
                      lat: Number.parseFloat(e.target.value),
                    },
                  },
                }))
              }
              placeholder="Enter map latitude"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lng">Map Longitude</Label>
            <Input
              id="lng"
              name="lng"
              type="number"
              step="any"
              value={formData.contactInfo.mapCoordinates?.lng || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contactInfo: {
                    ...prev.contactInfo,
                    mapCoordinates: {
                      ...prev.contactInfo.mapCoordinates,
                      lng: Number.parseFloat(e.target.value),
                    },
                  },
                }))
              }
              placeholder="Enter map longitude"
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Social Media Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              id="facebook"
              name="facebook"
              value={formData.socialLinks.facebook || ""}
              onChange={handleSocialChange}
              placeholder="Enter Facebook URL"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter</Label>
            <Input
              id="twitter"
              name="twitter"
              value={formData.socialLinks.twitter || ""}
              onChange={handleSocialChange}
              placeholder="Enter Twitter URL"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              id="instagram"
              name="instagram"
              value={formData.socialLinks.instagram || ""}
              onChange={handleSocialChange}
              placeholder="Enter Instagram URL"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={formData.socialLinks.linkedin || ""}
              onChange={handleSocialChange}
              placeholder="Enter LinkedIn URL"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="youtube">YouTube</Label>
            <Input
              id="youtube"
              name="youtube"
              value={formData.socialLinks.youtube || ""}
              onChange={handleSocialChange}
              placeholder="Enter YouTube URL"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
}

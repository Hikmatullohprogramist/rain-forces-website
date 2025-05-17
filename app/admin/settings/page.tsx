"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { MediaUploader } from "@/components/admin/media-uploader"
import { saveSettings } from "@/lib/settings-actions"

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Rain Forest",
    siteDescription: "Building restoration and rehabilitation services",
    contactEmail: "info@rainforest.com",
    contactPhone: "(123) 456-7890",
    address: "14-1085 Bellamy Rd N Toronto, Ontario, M1H 3C7",
    logo: "/logo.png",
    favicon: "/favicon.ico",
  })

  const [seoSettings, setSeoSettings] = useState({
    defaultTitle: "Rain Forest | Building Restoration & Rehabilitation",
    defaultDescription:
      "Rain Forest specializes in building restoration and rehabilitation services for residential and commercial buildings in Ontario since 2007.",
    defaultKeywords: "restoration, rehabilitation, construction, building, toronto, ontario",
    googleAnalyticsId: "",
    enableSitemap: true,
    enableRobotsTxt: true,
  })

  const [socialSettings, setSocialSettings] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  })

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSeoSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSocialSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setSeoSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handleLogoUpload = (url: string) => {
    setGeneralSettings((prev) => ({ ...prev, logo: url }))
  }

  const handleFaviconUpload = (url: string) => {
    setGeneralSettings((prev) => ({ ...prev, favicon: url }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")

    try {
      await saveSettings({
        general: generalSettings,
        seo: seoSettings,
        social: socialSettings,
      })
      setSuccessMessage("Settings saved successfully!")
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      console.error("Error saving settings:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Website Settings</h1>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Settings"}
        </Button>
      </div>

      {successMessage && <div className="bg-green-50 text-green-600 p-3 rounded-md">{successMessage}</div>}

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic website settings and information</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      name="siteName"
                      value={generalSettings.siteName}
                      onChange={handleGeneralChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Input
                      id="siteDescription"
                      name="siteDescription"
                      value={generalSettings.siteDescription}
                      onChange={handleGeneralChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      value={generalSettings.contactEmail}
                      onChange={handleGeneralChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      value={generalSettings.contactPhone}
                      onChange={handleGeneralChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={generalSettings.address}
                    onChange={handleGeneralChange}
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Logo</Label>
                    <MediaUploader onUpload={handleLogoUpload} currentImage={generalSettings.logo} />
                  </div>
                  <div className="space-y-2">
                    <Label>Favicon</Label>
                    <MediaUploader onUpload={handleFaviconUpload} currentImage={generalSettings.favicon} />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Search engine optimization settings</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultTitle">Default Meta Title</Label>
                  <Input
                    id="defaultTitle"
                    name="defaultTitle"
                    value={seoSettings.defaultTitle}
                    onChange={handleSeoChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="defaultDescription">Default Meta Description</Label>
                  <Textarea
                    id="defaultDescription"
                    name="defaultDescription"
                    value={seoSettings.defaultDescription}
                    onChange={handleSeoChange}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="defaultKeywords">Default Keywords</Label>
                  <Input
                    id="defaultKeywords"
                    name="defaultKeywords"
                    value={seoSettings.defaultKeywords}
                    onChange={handleSeoChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                  <Input
                    id="googleAnalyticsId"
                    name="googleAnalyticsId"
                    value={seoSettings.googleAnalyticsId}
                    onChange={handleSeoChange}
                    placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="enableSitemap"
                    checked={seoSettings.enableSitemap}
                    onCheckedChange={(checked) => handleSwitchChange("enableSitemap", checked)}
                  />
                  <Label htmlFor="enableSitemap">Generate XML Sitemap</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="enableRobotsTxt"
                    checked={seoSettings.enableRobotsTxt}
                    onCheckedChange={(checked) => handleSwitchChange("enableRobotsTxt", checked)}
                  />
                  <Label htmlFor="enableRobotsTxt">Generate robots.txt</Label>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Settings</CardTitle>
              <CardDescription>Social media profiles and sharing settings</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook URL</Label>
                  <Input
                    id="facebook"
                    name="facebook"
                    value={socialSettings.facebook}
                    onChange={handleSocialChange}
                    placeholder="https://facebook.com/yourpage"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter URL</Label>
                  <Input
                    id="twitter"
                    name="twitter"
                    value={socialSettings.twitter}
                    onChange={handleSocialChange}
                    placeholder="https://twitter.com/yourhandle"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    value={socialSettings.instagram}
                    onChange={handleSocialChange}
                    placeholder="https://instagram.com/yourhandle"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={socialSettings.linkedin}
                    onChange={handleSocialChange}
                    placeholder="https://linkedin.com/company/yourcompany"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube URL</Label>
                  <Input
                    id="youtube"
                    name="youtube"
                    value={socialSettings.youtube}
                    onChange={handleSocialChange}
                    placeholder="https://youtube.com/c/yourchannel"
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Advanced website configuration options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customCss">Custom CSS</Label>
                  <Textarea id="customCss" placeholder="Enter custom CSS code" rows={5} className="font-mono text-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="headerScripts">Header Scripts</Label>
                  <Textarea
                    id="headerScripts"
                    placeholder="Scripts to be included in the <head> section"
                    rows={5}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="footerScripts">Footer Scripts</Label>
                  <Textarea
                    id="footerScripts"
                    placeholder="Scripts to be included before the closing </body> tag"
                    rows={5}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Warning</h4>
                  <p className="text-sm">
                    These settings are for advanced users only. Incorrect configuration may break your website. Please
                    make sure you know what you're doing before making changes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

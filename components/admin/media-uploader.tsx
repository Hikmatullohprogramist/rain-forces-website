"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"

interface MediaUploaderProps {
  onUpload: (url: string) => void
  currentImage?: string
}

export function MediaUploader({ onUpload, currentImage }: MediaUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentImage || null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    // In a real application, you would upload the file to a server
    // For demo purposes, we'll just create a local URL
    const url = URL.createObjectURL(file)
    setPreview(url)
    onUpload(url)
  }

  const handleRemove = () => {
    setPreview(null)
    onUpload("")
  }

  return (
    <div>
      {preview ? (
        <div className="relative border rounded-md overflow-hidden">
          <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-48 object-cover" />
          <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={handleRemove}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-md p-6 text-center ${
            isDragging ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-700"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Upload className="h-10 w-10 text-gray-400" />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <Label htmlFor="file-upload" className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
                Click to upload
              </Label>{" "}
              or drag and drop
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">SVG, PNG, JPG or GIF (max. 2MB)</p>
            <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
          </div>
        </div>
      )}
    </div>
  )
}

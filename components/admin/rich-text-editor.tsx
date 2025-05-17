"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Link, ImageIcon, Code } from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [activeTab, setActiveTab] = useState<string>("edit")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  const insertFormat = (format: string) => {
    // This is a simplified implementation
    // In a real application, you would use a proper rich text editor library
    switch (format) {
      case "bold":
        onChange(`${value}<strong>bold text</strong>`)
        break
      case "italic":
        onChange(`${value}<em>italic text</em>`)
        break
      case "h1":
        onChange(`${value}<h1>Heading 1</h1>`)
        break
      case "h2":
        onChange(`${value}<h2>Heading 2</h2>`)
        break
      case "ul":
        onChange(`${value}<ul><li>List item</li></ul>`)
        break
      case "ol":
        onChange(`${value}<ol><li>List item</li></ol>`)
        break
      case "link":
        onChange(`${value}<a href="https://example.com">Link text</a>`)
        break
      case "image":
        onChange(`${value}<img src="/placeholder.svg" alt="Description" />`)
        break
      case "code":
        onChange(`${value}<code>code block</code>`)
        break
      default:
        break
    }
  }

  return (
    <div className="border rounded-md">
      <div className="flex items-center gap-1 p-2 border-b bg-gray-50 dark:bg-gray-900">
        <Button variant="ghost" size="icon" onClick={() => insertFormat("bold")}>
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormat("italic")}>
          <Italic className="h-4 w-4" />
        </Button>
        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-1" />
        <Button variant="ghost" size="icon" onClick={() => insertFormat("h1")}>
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormat("h2")}>
          <Heading2 className="h-4 w-4" />
        </Button>
        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-1" />
        <Button variant="ghost" size="icon" onClick={() => insertFormat("ul")}>
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormat("ol")}>
          <ListOrdered className="h-4 w-4" />
        </Button>
        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-1" />
        <Button variant="ghost" size="icon" onClick={() => insertFormat("link")}>
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormat("image")}>
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => insertFormat("code")}>
          <Code className="h-4 w-4" />
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b px-3">
          <TabsList className="bg-transparent border-b-0">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="edit" className="p-0 border-0">
          <textarea
            value={value}
            onChange={handleChange}
            className="w-full min-h-[300px] p-4 focus:outline-none resize-y"
            placeholder="Start writing content..."
          />
        </TabsContent>
        <TabsContent value="preview" className="p-4 border-0 min-h-[300px]">
          <div dangerouslySetInnerHTML={{ __html: value || "<p>No content to preview</p>" }} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

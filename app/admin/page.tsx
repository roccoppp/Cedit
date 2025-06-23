'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useState, useRef } from "react"
import { submitAdminForm } from "./admin"

export default function AdminPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        setImageFile(file)
        const reader = new FileReader()
        reader.onload = (e) => {
          setPreviewImage(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        setImageFile(file)
        const reader = new FileReader()
        reader.onload = (e) => {
          setPreviewImage(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <div className="min-h-screen bg-light-purple">
      <div className="container mx-auto py-12 px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <form action={submitAdminForm} encType="multipart/form-data">
                <div>
                    <Label htmlFor="title" className="text-dark-blue font-medium">
                      Titulo
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      required
                      className="mt-1 border-bright-blue/30 focus:border-bright-blue"
                    />                      
                  </div>
                  <div className=" py-5">
                    <Label htmlFor="description" className="text-dark-blue font-medium">
                      Descripcion
                    </Label>                    
                    <Textarea
                      id="description"
                      name="description"
                      required
                      className="mt-1 border-bright-blue/30 focus:border-bright-blue min-h-[150px] resize-vertical"
                    />
                  </div>
                  {/* Drag and drop image upload zone */}
                  <div
                    className={`mt-6 border-2 border-dashed rounded-lg p-8 ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} transition-colors duration-200 ease-in-out cursor-pointer flex flex-col items-center justify-center min-h-[200px] relative mb-6`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    {previewImage ? (
                      <div className="relative w-full h-full min-h-[200px]">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-gray-400 mb-4" />
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          Drag and drop your image here or click to select
                        </p>
                        <p className="text-sm text-gray-500">
                          Support for PNG, JPG, JPEG files
                        </p>
                      </>
                    )}
                  </div>
                <Button
                  type="submit"
                  className="w-full bg-bright-blue hover:bg-bright-blue/90 text-white py-3 text-lg font-medium"
                >
                  Submit
                </Button>
            </form>
        </div>
      </div>
    </div>
  )
}
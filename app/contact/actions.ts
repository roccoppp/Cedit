"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const studentId = formData.get("studentId") as string
  const interest = formData.get("interest") as string
  const message = formData.get("message") as string

  try {
    // Save to database
    await prisma.contact.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        message: `
          Phone: ${phone}
          Student ID: ${studentId}
          Interest: ${interest}
          Message: ${message}
        `.trim()
      }
    })

    // Log for debugging
    console.log("Contact form submission saved to database")



  } catch (error) {
    console.error("Error saving contact form:", error)
    redirect("/contact?error=true")
  }
  redirect("/contact?success=true")
}

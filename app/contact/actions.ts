"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const studentId = formData.get("studentId") as string
  const interest = formData.get("interest") as string
  const message = formData.get("message") as string

  // In a real application, you would send this data via email
  // For now, we'll just log it and redirect with a success message
  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    phone,
    studentId,
    interest,
    message,
    submittedAt: new Date().toISOString(),
  })

  // Here you would typically:
  // 1. Send an email to the organization
  // 2. Save to a database
  // 3. Send a confirmation email to the user

  // Redirect to a success page or back to contact with success message
  redirect("/contact?success=true")
}

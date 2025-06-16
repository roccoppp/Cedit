import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function MembersPage() {
  const members = [
    {
      name: "Sarah Johnson",
      role: "President",
      photo: "/placeholder.svg?height=300&width=300",
      description: "Computer Science major passionate about community building",
    },
    {
      name: "Michael Chen",
      role: "Vice President",
      photo: "/placeholder.svg?height=300&width=300",
      description: "Business Administration student with leadership experience",
    },
    {
      name: "Emily Rodriguez",
      role: "Secretary",
      photo: "/placeholder.svg?height=300&width=300",
      description: "Psychology major dedicated to student wellness",
    },
    {
      name: "David Kim",
      role: "Treasurer",
      photo: "/placeholder.svg?height=300&width=300",
      description: "Finance student with strong analytical skills",
    },
    {
      name: "Jessica Thompson",
      role: "Events Coordinator",
      photo: "/placeholder.svg?height=300&width=300",
      description: "Communications major specializing in event planning",
    },
    {
      name: "Alex Martinez",
      role: "Community Outreach",
      photo: "/placeholder.svg?height=300&width=300",
      description: "Social Work student committed to community service",
    },
  ]

  return (
    <div className="min-h-screen bg-light-purple">
      {/* Navigation */}
      <nav className="bg-dark-blue text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Center</h1>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-bright-blue transition-colors">
              Home
            </Link>
            <Link href="/members" className="text-bright-blue">
              Members
            </Link>
            <Link href="/about" className="hover:text-bright-blue transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-bright-blue transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        <Link
          href="/"
          className="inline-flex items-center text-dark-blue hover:text-bright-blue mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h2 className="text-5xl font-bold text-dark-blue text-center mb-4">Our Team</h2>
        <p className="text-xl text-dark-blue/80 text-center mb-12 max-w-3xl mx-auto">
          Meet the dedicated individuals who make our student center a thriving community. Each member brings unique
          skills and passion to our organization.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-bright-blue/20 bg-white"
            >
              <div className="relative h-64">
                <Image src={member.photo || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-dark-blue mb-2">{member.name}</h3>
                <p className="text-lg font-medium text-pink mb-3">{member.role}</p>
                <p className="text-dark-blue/70">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

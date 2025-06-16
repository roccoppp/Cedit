import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Mail, Info } from "lucide-react"

export default function HomePage() {
  const activities = [
    {
      title: "Previa CEDIT",
      description: "Join our collaborative study sessions every Tuesday and Thursday",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Career Workshop Series",
      description: "Professional development workshops with industry experts",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Community Service Project",
      description: "Making a difference in our local community through volunteer work",
      image: "/placeholder.svg?height=300&width=400",
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
            <Link href="/members" className="hover:text-bright-blue transition-colors">
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-dark-blue mb-6">Welcome to Our Student Center</h2>
          <p className="text-xl text-dark-blue/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hola
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild className="bg-bright-blue hover:bg-bright-blue/90 text-white px-8 py-3 text-lg">
              <Link href="/members">
                <Users className="mr-2 h-5 w-5" />
                Meet Our Team
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white px-8 py-3 text-lg"
            >
              <Link href="/about">
                <Info className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current Activities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-dark-blue text-center mb-12">Current Activities</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-bright-blue/20"
              >
                <div className="relative h-48">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-dark-blue mb-3">{activity.title}</h4>
                  <p className="text-dark-blue/70">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-pink hover:bg-pink/90 text-white px-8 py-3 text-lg">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

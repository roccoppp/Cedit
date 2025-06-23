import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Mail, Info } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { prisma } from "@/lib/prisma"

export default async function HomePage() {
  // Fetch activities from the database
  const activities = await prisma.activity.findMany({
    select: {
      title: true,
      description: true,
      image: true,
    },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="min-h-screen bg-light-purple">
      {/* Hello Section */}
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

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <Card
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

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

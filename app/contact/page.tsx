import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { submitContactForm } from "./actions"

export default function ContactPage() {
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
            <Link href="/contact" className="text-bright-blue">
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

        <h2 className="text-5xl font-bold text-dark-blue text-center mb-4">Get In Touch</h2>
        <p className="text-xl text-dark-blue/80 text-center mb-12 max-w-3xl mx-auto">
          Ready to join our community or have questions about our programs? We'd love to hear from you! Fill out the
          form below and we'll get back to you soon.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-bright-blue/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-dark-blue">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={submitContactForm} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-dark-blue font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1 border-bright-blue/30 focus:border-bright-blue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-dark-blue font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-1 border-bright-blue/30 focus:border-bright-blue"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-dark-blue font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 border-bright-blue/30 focus:border-bright-blue"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-dark-blue font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 border-bright-blue/30 focus:border-bright-blue"
                  />
                </div>

                <div>
                  <Label htmlFor="studentId" className="text-dark-blue font-medium">
                    Student ID (if applicable)
                  </Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    className="mt-1 border-bright-blue/30 focus:border-bright-blue"
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="text-dark-blue font-medium">
                    Area of Interest
                  </Label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-1 w-full p-2 border border-bright-blue/30 rounded-md focus:border-bright-blue focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="membership">Becoming a Member</option>
                    <option value="events">Upcoming Events</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-dark-blue font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1 border-bright-blue/30 focus:border-bright-blue"
                    placeholder="Tell us more about your interest or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-bright-blue hover:bg-bright-blue/90 text-white py-3 text-lg font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-bright-blue/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-dark-blue">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-bright-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-dark-blue">Email</h4>
                    <p className="text-dark-blue/80">info@studentcenter.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-bright-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-dark-blue">Phone</h4>
                    <p className="text-dark-blue/80">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-bright-blue mt-1" />
                  <div>
                    <h4 className="font-medium text-dark-blue">Address</h4>
                    <p className="text-dark-blue/80">
                      Student Center Building
                      <br />
                      123 University Avenue
                      <br />
                      Campus, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink/20 shadow-lg bg-pink/5">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-dark-blue mb-4">Office Hours</h4>
                <div className="space-y-2 text-dark-blue/80">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

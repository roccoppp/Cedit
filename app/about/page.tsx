import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-bright-blue">
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

        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-dark-blue text-center mb-12">About Our Organization</h2>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-2 border-bright-blue/20">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-dark-blue mb-8">
                Founded in 2018, our Student Center has grown from a small group of passionate individuals into a
                BOCA JUNIORSD MIAMI. We believe that education extends
                far beyond the classroom, and our mission is to create meaningful opportunities for personal growth,
                professional development, and community engagement.
              </p>

              <h3 className="text-3xl font-bold text-dark-blue mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed text-dark-blue/80 mb-8">
                To foster an inclusive environment where students can develop leadership skills, build lasting
                relationships, and make a positive impact in their community. We strive to bridge the gap between
                academic learning and real-world application through innovative programs, collaborative projects, and
                service opportunities.
              </p>

              <h3 className="text-3xl font-bold text-dark-blue mb-6">What We Do</h3>
              <p className="text-lg leading-relaxed text-dark-blue/80 mb-6">
                Our organization operates on four core pillars that guide all our activities and initiatives:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-light-purple p-6 rounded-lg border border-bright-blue/30">
                  <h4 className="text-xl font-bold text-dark-blue mb-3">Academic Excellence</h4>
                  <p className="text-dark-blue/80">
                    We provide tutoring services, study groups, and academic workshops to help students achieve their
                    educational goals.
                  </p>
                </div>
                <div className="bg-light-purple p-6 rounded-lg border border-bright-blue/30">
                  <h4 className="text-xl font-bold text-dark-blue mb-3">Professional Development</h4>
                  <p className="text-dark-blue/80">
                    Through career workshops, networking events, and mentorship programs, we prepare students for
                    successful careers.
                  </p>
                </div>
                <div className="bg-light-purple p-6 rounded-lg border border-bright-blue/30">
                  <h4 className="text-xl font-bold text-dark-blue mb-3">Community Service</h4>
                  <p className="text-dark-blue/80">
                    We organize volunteer opportunities and community outreach programs to give back to our local
                    community.
                  </p>
                </div>
                <div className="bg-light-purple p-6 rounded-lg border border-bright-blue/30">
                  <h4 className="text-xl font-bold text-dark-blue mb-3">Social Connection</h4>
                  <p className="text-dark-blue/80">
                    We host social events, cultural celebrations, and recreational activities to build lasting
                    friendships.
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-dark-blue mb-6">Our Impact</h3>
              <p className="text-lg leading-relaxed text-dark-blue/80 mb-6">
                Over the past six years, we have proudly served over 2,000 students, organized more than 150 events,
                contributed over 5,000 hours of community service, and established partnerships with 25 local
                organizations. Our alumni network spans across various industries and continues to support current
                students through mentorship and career guidance.
              </p>

              <h3 className="text-3xl font-bold text-dark-blue mb-6">Looking Forward</h3>
              <p className="text-lg leading-relaxed text-dark-blue/80 mb-8">
                As we continue to grow and evolve, we remain committed to our founding principles while adapting to meet
                the changing needs of our student body. We are constantly exploring new ways to enhance the student
                experience, whether through innovative technology, expanded programming, or deeper community
                partnerships.
              </p>

              <div className="bg-bright-blue/10 p-6 rounded-lg border border-bright-blue/30">
                <p className="text-lg font-medium text-dark-blue text-center">
                  "Together, we are not just building a student organization – we are creating a legacy of leadership,
                  service, and community that will inspire future generations."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg">© Centro de estudiantes UTDT (organizacion estudiantil). Web Services by Rocco Perrone, @vosvosvo on X</p>
        </div>
      </footer>
    </div>
  )
}

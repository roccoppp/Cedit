import React from 'react';
import Link from "next/link"

export default function Navbar(){
    return(
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
    );
}

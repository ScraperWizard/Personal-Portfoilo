import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-400 text-sm py-4">
      <div>Built by Abdulrahman Alali © {year} All rights reserved</div>
      <div>Built with Next.js, Tailwind.css, Framer motion. Hosted using Vercel</div>
    </footer>
  )
}
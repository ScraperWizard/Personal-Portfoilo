import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-400 text-sm py-4 mt-10">
      <div>Built by Abdulrahman Alali using Next, Tailwind and Framer motion. Powered by vercel © {year} All rights reserved</div>
    </footer>
  )
}
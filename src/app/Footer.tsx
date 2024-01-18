import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-400 text-sm py-4 mt-10">
      <div>Built using Next and TilWind. Powered by vercel © {year} All rights reserved</div>
    </footer>
  )
}
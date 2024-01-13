import React from 'react'
import HeaderText from '@/components/HeaderText'
import { emailContact } from '@/data/contacts'

export default function Contact() {
  return (
    <section className="bg-black mb-28 scroll-mt-28 sm:mb-40">
        <HeaderText text="Contact Me" />
        <div>
            Contact me directly at {emailContact.link} or through this form.
        </div>
    </section>
  )
}

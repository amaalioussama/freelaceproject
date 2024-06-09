'use client'

import { useEffect } from 'react'

import 'aos/dist/aos.css'
import AOS from 'aos'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/footer'
import Header from '../../components/navbar'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
     <html>
    <body>
      <main className="grow">

        <PageIllustration />
<Header/>
        {children}

      </main>

      <Footer />
      </body>
      </html>
    </>
  )
}

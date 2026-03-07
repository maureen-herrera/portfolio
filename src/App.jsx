import { lazy, Suspense } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Features = lazy(() => import('./components/Features'))
const Philosophy = lazy(() => import('./components/Philosophy'))
const Protocol = lazy(() => import('./components/Protocol'))
const ExperienceSection = lazy(() => import('./components/Experience'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Features />
          <Philosophy />
          <Protocol />
          <ExperienceSection />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

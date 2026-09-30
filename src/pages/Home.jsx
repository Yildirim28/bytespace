import Hero from '../components/Hero.jsx'
import LogoStrip from '../components/LogoStrip.jsx'
import CoursesSection from '../components/CoursesSection.jsx'
import CategoriesSection from '../components/CategoriesSection.jsx'
import FeatureGrowth from '../components/FeatureGrowth.jsx'
import FeatureCreate from '../components/FeatureCreate.jsx'
import CreatorCTA from '../components/CreatorCTA.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LogoStrip />
      <CoursesSection />
      <CategoriesSection />
      <div className="bg-soft-gradient">
        <FeatureGrowth />
        <FeatureCreate />
      </div>
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </div>
  )
}

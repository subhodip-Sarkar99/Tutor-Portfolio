import { CoursesOfferedCard } from "../components/CoursesOfferedCard"
import { HeroSection } from "../components/HeroSection"
import { Testimonials } from "../components/Testimonials"
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
     
      <HeroSection />
      <CoursesOfferedCard />
      <Testimonials />
      <Footer />
    </section>
  )
}


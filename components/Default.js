import AboutSection from "@/components/AboutSection"
import Profile from "@/components/Profile"
import Project from "@/components/Project"
import Experience from "./Experience"

export default function Default() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Profile />
      <AboutSection />
      <Project />
      <Experience />
    </main>
  )
}
import { Dock, Navbar, Welcome } from "@/components"
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from "../windows"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap"

gsap.registerPlugin(Draggable)

export default function Home() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  )
}

import { Dock, Navbar, Welcome } from "@/components"
import { Terminal } from "../windows"
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
    </main>
  )
}

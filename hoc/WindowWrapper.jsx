"use client"

import { useRef } from "react"
import useWindowStore from "@/store/window"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable)

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = props => {
    const { focusWindow, windows } = useWindowStore()
    const { isOpen, zIndex } = windows[windowKey]

    const ref = useRef(null)

    // Open animation
    useGSAP(() => {
      const el = ref.current
      if (!el || !isOpen) return

      const isMobile = window.matchMedia("(max-width: 639px)").matches

      el.style.display = "block"

      gsap.fromTo(
        el,
        {
          scale: isMobile ? 0.96 : 0.8,
          opacity: 0,
          y: isMobile ? 10 : 40
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power3.out",
          onComplete: () => {
            // Let Draggable start from a clean transform
            if (!isMobile) {
              gsap.set(el, {
                clearProps: "transform"
              })
            }
          }
        }
      )
    }, [isOpen])

    // Desktop dragging
    useGSAP(() => {
      const el = ref.current
      if (!el) return

      const isMobile = window.matchMedia("(max-width: 639px)").matches

      if (isMobile) return

      const draggable = Draggable.create(el, {
        type: "x,y",
        cursor: "grab",
        activeCursor: "grabbing",

        onPress: () => {
          focusWindow(windowKey)
        }
      })

      return () => {
        draggable[0]?.kill()
      }
    }, [])

    return (
      <section
        id={windowKey}
        ref={ref}
        onMouseDown={() => focusWindow(windowKey)}
        onTouchStart={() => focusWindow(windowKey)}
        style={{
          zIndex,
          display: isOpen ? "block" : "none"
        }}
        className="absolute max-sm:fixed max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:rounded-none"
      >
        <Component {...props} />
      </section>
    )
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`

  return Wrapped
}

export default WindowWrapper

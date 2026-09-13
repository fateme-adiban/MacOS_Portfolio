"use client"

import { dockApps } from "@/constants"
import useWindowStore from "@/store/window"

const MobileApps = () => {
  const { openWindow } = useWindowStore()

  return (
    <section id="mobile-apps" className="hidden max-sm:flex fixed bottom-8 left-0 w-full px-3 flex-wrap-reverse gap-3 justify-center items-center">
      {dockApps
        .filter(({ id }) => id !== "trash")
        .map(({ id, name, icon, canOpen }) => (
          <button key={id} type="button" disabled={!canOpen} onClick={() => canOpen && openWindow(id)} className="flex flex-col items-center gap-2">
            <img src={`/images/${icon}`} alt={name} className={`size-16 rounded-2xl object-cover ${canOpen ? "" : "opacity-50"}`} />

            <span className="text-xs text-white text-center drop-shadow-md">{name}</span>
          </button>
        ))}
    </section>
  )
}

export default MobileApps

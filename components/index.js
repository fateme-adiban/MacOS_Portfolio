"use client"
import dynamic from "next/dynamic"

import Navbar from "./Navbar"
import Welcome from "./Welcome"
import Dock from "./Dock"
import WindowControls from "./WindowControls"
import Desktop from "./Desktop"

const MobileApps = dynamic(() => import("./MobileApps"), {
  ssr: false
})

export { Navbar, Welcome, Dock, WindowControls, Desktop, MobileApps }

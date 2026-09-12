"use client"

import Terminal from "./Terminal"
import Safari from "./Safari"
import Finder from "./Finder"
import Text from "./Text"
import Image from "./Image"
import Contact from "./Contact"
import dynamic from "next/dynamic"

const Resume = dynamic(() => import("./Resume"), {
  ssr: false
})

export { Terminal, Safari, Resume, Finder, Text, Image, Contact }

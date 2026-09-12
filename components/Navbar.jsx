"use client"

import { navIcons, navLinks } from "@/constants"
import Image from "next/image"
import dayjs from "dayjs"
import useWindowStore from "@/store/window"

const Navbar = () => {
  const { openWindow } = useWindowStore()

  return (
    <nav>
      <div>
        <Image src="/images/logo.svg" width={14} height={17} alt="logo" />

        <p className="font-medium">Fateme's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image src={img} width={14} height={14} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar

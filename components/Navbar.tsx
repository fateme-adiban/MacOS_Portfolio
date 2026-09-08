import { navIcons, navLinks } from "@/constants"
import Image from "next/image"
import dayjs from "dayjs"

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src="/images/logo.svg" width={14} height={17} alt="logo" />

        <p className="font-medium">Fateme's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
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

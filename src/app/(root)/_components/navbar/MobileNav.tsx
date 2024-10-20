import { navItems } from "@/constants"
import Link from "next/link"


const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full">
      <div>
        <ul className="flex items-center">
          {navItems.map(item => (
            <li key={item.id}>
              <Link href={item.href}>
                <span>
                  {/* icon */}
                </span>
                <span>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default MobileNav
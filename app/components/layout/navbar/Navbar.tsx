import { logoPath } from "../svgPath/iconsPaths";
import { NavItem, navItems } from "./navItems";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent hover:bg-white hover:shadow-xl/30 transition-all duration-500 ease-out flex mt-4 max-w-7xl mx-auto py-4 gap-6 px-5 rounded-sm">
        <a href="" >
          <svg width={60} height={25} viewBox="0 0 60 25" fill="none">
            {logoPath}
          </svg>
        </a>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              hasArrow={item.hasArrow}
              dropdown={item.dropdown} />
          ))}
        </ul>
      </nav>
    </>

  )
};


import { logoPath } from "../svgPath/iconsPaths";
import { NavItem, navItems } from "./navItems";


export const Navbar = () => {
  return (
    <div className="mx-32 mt-3 px-3 py-1 bg-transparent hover:bg-white hover:shadow-xl/20 transition-all duration-500 ease-out">
      <nav className="flex items-center justify-between px-2 py-3">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center">
            <svg width={60} height={25} viewBox="0 0 60 25" fill="none">
              {logoPath}
            </svg>
          </a>
          <ul className="flex items-center gap-10 text-sm font-medium">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                hasArrow={item.hasArrow} 
                dropdown = {item.dropdown}
              />
            ))}
          </ul>

        </div>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li className="cursor-pointer">Sign in</li>
          <li className="cursor-pointer">Contact Sales</li>
        </ul>
      </nav>
    </div>
  );
};



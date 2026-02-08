import { leftArrowPath, rightArrowPath } from "../svgPath/iconsPaths";
import { Dropdown } from "../ui/dropdown";

interface NavItemProps {
  label: string;
  hasArrow?: boolean;
  dropdown?: boolean
}


export const navItems = [
  { label: "Products", hasArrow: true, dropdown: true },
  { label: "Solutions", hasArrow:true , dropdown: true },
  { label: "Developers", hasArrow:true , dropdown: true },
  { label: "Resources", hasArrow:true , dropdown: true },
  { label: "Pricing" },
];


export const NavItem = ({ label, hasArrow, dropdown }: NavItemProps) => {
  return (
    <li className="relative group flex items-center gap-1 cursor-pointer">
      <span>{label}</span>

      {hasArrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          className="transition-transform duration-300 group-hover:rotate-180"
        >
          {leftArrowPath}
          {rightArrowPath}
        </svg>
      )}

      {dropdown && <Dropdown />}
    </li>
  );
}
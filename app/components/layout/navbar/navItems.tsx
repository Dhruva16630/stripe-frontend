import { leftArrowPath, rightArrowPath } from "../svgPath/iconsPaths"

export const navItems = [
  {label: "Products", hasArrow: true, dropdown: true },
  {label: "Soltions", hasArrow: true, dropdown: true},
  {label: "Developers", hasArrow: true, dropdown: true},
  {label: "Resources", hasArrow: true, dropdown: true},
  {label: "Pricing", hasArrow: false, dropdown: false},
]


interface NavItemProps {
  label: string;
  hasArrow?: boolean;
  dropdown?: boolean
}

export const NavItem = ({ label, hasArrow, dropdown }: NavItemProps) => {
  return (
    <li className="group flex items-center gap-1 cursor-pointer whitespace-nowrap">
      <span>{label}</span>

      {hasArrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          className="
            transition-transform duration-940 ease-out
            group-hover:rotate-x-180 block translate-y-px
          "
        >
          {leftArrowPath}
          {rightArrowPath}
        </svg>
      )}
    </li>
  );
};




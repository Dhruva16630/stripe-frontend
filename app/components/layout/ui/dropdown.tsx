export const Dropdown = () => {
  return (
    <div
      className="
        absolute top-full left-0 mt-3
        w-64 rounded-xl bg-white
        shadow-xl shadow-black/10
        opacity-0 translate-y-2
        pointer-events-none
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        group-hover:opacity-100
        group-hover:translate-y-0
        group-hover:pointer-events-auto
        z-50
      "
    >
      <ul className="p-4 space-y-3 text-sm">
        <li>Payments</li>
        <li>Billing</li>
        <li>Invoicing</li>
      </ul>
    </div>
  );
};

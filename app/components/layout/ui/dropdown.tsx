// export const Dropdown = () => {
//   return (
//     <div
//       className="
//       absolute left-0 top-full mt-2
//       w-full rounded-xl bg-white shadow-xl
//       opacity-0 invisible
//       group-hover:opacity-100 group-hover:visible
//       translate-y-0
//       transition-all duration-200
//       "
//     >
//       <ul className="p-4 space-y-3 text-sm">
//         <li className="px-4 py-2 rounded-md">Payments</li>
//         <li className="px-4 py-2 rounded-md">Billing</li>
//         <li className="px-4 py-2 rounded-md">Invoicing</li>
//       </ul>
//     </div>
//   );
// };


export const Dropdown = () => {
  return (
    <div
      className="
        absolute left-0 top-full mt-2
        w-full bg-white shadow-xl
        opacity-0 invisible translate-y-2
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-200 ease-out
        z-50
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <ul className="grid grid-cols-4 gap-6 text-sm">
          <li>Payments</li>
          <li>Billing</li>
          <li>Invoicing</li>
          <li>Subscriptions</li>
        </ul>
      </div>
    </div>
  );
};

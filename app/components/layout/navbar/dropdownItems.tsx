import { CSSProperties } from "react";
import { leftArrowPath, rightArrowPath } from "../svgPath/iconsPaths";


export const productsDropdownPayments = [
  {
    subTitle: "Payments",
    description: "Online payments"
  },
  {
    subTitle: "Payment Links",
    description: "No-code payments"
  },
  {
    subTitle: "Checkout",
    description: "Pre-built payment form"
  },
  {
    subTitle: "Elements",
    description: "Flexible UI components"
  },
  {
    subTitle: "Payment methods",
    description: "Access to 100+"
  },
  {
    subTitle: "Radar",
    description: "Fraud prvention"
  },
  {
    subTitle: "Authorization Boost",
    description: "Acceptance optimistations"
  },
  {
    subTitle: "Link",
    description: "Accelerated checkout"
  }


];

export const productsDropdownRevenue = [
  {
    subTitle:"Billing",
    description: "Subscription management"
  },
  {
    subTitle:"Usage-based billing ",
    description: "Metered billing "
  },
  {
    subTitle:"Invoicing ",
    description: "One-time or recurring "
  },
   {
    subTitle:"Tax ",
    description: " Sales tax & VAT automation"
  },
   {
    subTitle:"Revenue Recognition",
    description: "Accounting automation "
  },
   {
    subTitle:"Stripe Sigma",
    description: "Custom reports "
  },
   {
    subTitle:"Data Pipeline",
    description: "Data sync "
  },
]

export const productsDropdownMoneyManagement = [
   {
    subTitle:"Global Payouts",
    description: "Payouts to third parties"
  },
   {
    subTitle:"Cryptocurrency",
    description: "Wallet, stablecoin issuing and card infrastructure"
  },
]

export const productsDropdownPlatformsandmarketplaces = [
   {
    subTitle:"Connect",
    description: "Multi-party payments "
  },
   {
    subTitle:"Financial Accounts for platforms",
    description: "Embedded financial services"
  },
]

export const productsDropdownMore = [
   {
    subTitle:"Atlas ",
    description: "Start-up incorporation"
  },
   {
    subTitle:"Climate",
    description: " Carbon removal "
  },
   {
    subTitle:"Identity",
    description: " Online identity verification "
  },
]

interface productsDropdown {
  subTitle: string
  description: string
  
}

export const ProductsDropdown = ({
  subTitle,
  description
}: productsDropdown) => {
  return (
    <div className="cursor-pointer mt-2 ">

      <div className="flex items-center gap-2 ">

        <span className="font-medium ">
          {subTitle}
        </span>

        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" className="mt-0.5">
          {leftArrowPath}{rightArrowPath}
        </svg>

      </div>

      <p className="text-sm ">
        {description}
      </p>

    </div>
  );
};


export const solutionsDropdown = [
  {
    title: "By stage",
    items: [
      { title: "Startups" },
      { title: "Enterprises" }
    ]
  },
  {
    title: "By use case",
    items: [
      { title: "E-commerce" },
      { title: "SaaS" }
    ]
  }
];

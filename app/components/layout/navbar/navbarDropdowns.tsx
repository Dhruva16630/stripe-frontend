import Image from "next/image"
import { ProductsDropdown, productsDropdownMoneyManagement, productsDropdownMore, productsDropdownPayments, productsDropdownPlatformsandmarketplaces, productsDropdownRevenue } from "./dropdownItems"

export const Dropdown = () => {
    return (
        <div className=" max-w-7xl mx-auto py-8 px-8 rounded-sm grid grid-cols-5 gap-2">
            <section className="">
                <span className="flex ">Payments</span>
                <div className="mt-6">
                    {productsDropdownPayments.map((item) => (
                        <ProductsDropdown
                            key={item.subTitle}
                            subTitle={item.subTitle}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <section className="">
                <span className="flex ">Revenue</span>
                <div className="mt-6">
                    {productsDropdownRevenue.map((item) => (
                        <ProductsDropdown
                            key={item.subTitle}
                            subTitle={item.subTitle}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <section className="">
                <span className="flex ">Money Management</span>
                <div className="mt-6">
                    {productsDropdownMoneyManagement.map((item) => (
                        <ProductsDropdown
                            key={item.subTitle}
                            subTitle={item.subTitle}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <section className="">
                <span className="flex ">Platforms and marketplaces</span>
                <div className="mt-6">
                    {productsDropdownPlatformsandmarketplaces.map((item) => (
                        <ProductsDropdown
                            key={item.subTitle}
                            subTitle={item.subTitle}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <section className="">
                <span className="flex ">More</span>
                <div className="mt-6">
                    {productsDropdownMore.map((item) => (
                        <ProductsDropdown
                            key={item.subTitle}
                            subTitle={item.subTitle}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="mt-9 px6">
                    <Image src="/images/image.png"
                        alt="NavbarImage" width={300} height={200} className="object-contain" />
                </div>
                <p>
                    <b className="flex">Join us at Sessions</b>
                    Register to attend our<br /> annual conference in San Francisco April 29–30.
                </p>
            </section>
        </div>
    )
}
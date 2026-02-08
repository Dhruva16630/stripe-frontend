import { ReactNode } from "react"
import { useRouter } from "next/router"
import { Url } from "url";

interface buttonProps {
    text: string,
    logo: ReactNode,
    textLink: Url,
    onHover: () => void
}

export const Button = ({
    text,
    logo,
    textLink,
    onHover,
}: buttonProps) =>{
    const router = useRouter();
    return (
        <button onClick={() =>router.push(textLink)} onMouseEnter={onHover}>
            {logo && <span>{logo}</span>}
            <span>{text}</span>
        </button>
    )
}
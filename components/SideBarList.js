import Image from "next/image";
import Link from "next/link";

export default function SideBarList({ logo, title, isactive }) {
    return (
        <li>
            <Link
                className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${
                    isactive && "bg-primary text-black"
                }`}
                href="#"
            >
                <Image
                    src={`/assets/icons/${logo}.svg`}
                    width="24"
                    height="24"
                    alt={logo}
                />
                <span>{title}</span>
            </Link>
        </li>
    );
}

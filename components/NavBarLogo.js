import Image from "next/image";
import Link from "next/link";

export default function NavBarLogo({ logo }) {
    return (
        <li className="hover:scale-105">
            <Link
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
            >
                <Image
                    src={`/assets/svg/${logo}.svg`}
                    width="24"
                    height="24"
                    alt={logo}
                />
            </Link>
        </li>
    );
}

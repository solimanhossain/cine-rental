import Image from "next/image";
import Link from "next/link";
import NavBarLogo from "./NavBarLogo";
import SwitchDark from "./SwitchDark";
import SwitchLanguage from "./SwitchLanguage";

export default function NavBar() {
    return (
        <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <Link href="/">
                    <Image
                        className="w-[140px] h-[25px]"
                        src="/assets/svg/logo.svg"
                        width={140}
                        height={25}
                        alt="logo"
                    />
                </Link>

                <ul className="flex items-center space-x-5">
                    <NavBarLogo logo="ring" />
                    <NavBarLogo logo="cart" />
                    <SwitchDark />
                    <SwitchLanguage />
                </ul>
            </nav>
        </header>
    );
}

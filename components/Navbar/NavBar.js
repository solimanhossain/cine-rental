"use client";
import Image from "next/image";
import Link from "next/link";
import ShowCart from "./ShowCart";
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
                    {/* <li className="hover:scale-105">
                        <Link
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <Image
                                src={`/assets/svg/ring.svg`}
                                width="24"
                                height="24"
                                alt="ring"
                            />
                        </Link>
                    </li> */}
                    <ShowCart />
                    <SwitchDark />
                    <SwitchLanguage />
                </ul>
            </nav>
        </header>
    );
}

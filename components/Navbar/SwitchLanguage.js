import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SwitchLanguage() {
    const router = useRouter();
    const fullPath = usePathname();
    const langPath = fullPath.split("/");
    const lang = langPath[1];

    function handleLanguage() {
        langPath[1] = lang === "en" ? "bn" : "en";
        let newPath = langPath.join("/");
        router.push(newPath);
    }

    return (
        <li onClick={handleLanguage} className="hover:scale-105">
            <Link
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
            >
                <Image
                    src={`/assets/svg/${lang}.svg`}
                    width="24"
                    height="24"
                    alt={lang}
                />
            </Link>
        </li>
    );
}

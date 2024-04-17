import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SwitchDark() {
    const [mode, setMode] = useState("moon");

    function handleMode() {
        setMode(mode === "moon" ? "sun" : "moon");
        document.body.classList.toggle("dark");
    }

    return (
        <li className="hover:scale-105">
            <Link
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
            >
                <Image
                    onClick={handleMode}
                    src={`/assets/svg/${mode}.svg`}
                    width="24"
                    height="24"
                    alt={mode}
                />
            </Link>
        </li>
    );
}

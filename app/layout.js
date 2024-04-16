import "@/app/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });
import FooterBar from "@/components/FooterBar";

export const metadata = {
    title: "Cine Rental | Learn with Sumit",
    description: "Assignment 7 - Cine Rental",
};

export default async function RootLayout({ children }) {
    return (
        <html>
            <body
                className={`${inter.className} font-[Sora] bg-white text-dark dark`}
            >
                <div id="modal" />
                <NavBar />
                {children}
                <FooterBar />
            </body>
        </html>
    );
}

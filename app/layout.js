import "@/app/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar/NavBar";
const inter = Inter({ subsets: ["latin"] });
import FooterBar from "@/components/FooterBar";
import MovieCartProvider from "@/provider/MovieCartProvider";

export const metadata = {
    title: "Cine Rental | Learn with Sumit",
    description: "Assignment 7 - Cine Rental",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body
                className={`${inter.className} font-[Sora] bg-white text-dark dark`}
            >
                <MovieCartProvider>
                    <div id="modal" />
                    <NavBar />
                    {children}
                </MovieCartProvider>
                <FooterBar />
            </body>
        </html>
    );
}

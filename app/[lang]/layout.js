import { getDictionary } from "@/app/[lang]/_dictionaries/language";
import SideBar from "@/components/SideBar";

export default async function Layout({ children, params }) {
    const lang = params.lang;
    const dict = await getDictionary(lang);

    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <SideBar dict={dict} />
                {children}
            </div>
        </main>
    );
}

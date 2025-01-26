"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    const entries: {
        name: string;
        href: string;
    }[] = [
        { name: "home", href: "/" },
        { name: "puzzles", href: "/puzzles" },
        { name: "blog", href: "/blog" },
    ];
    return (
        <div className="flex flex-row justify-center space-x-8 text-xl p-4">
            {entries.map((entry) => (
                <Link
                    key={entry.href}
                    href={entry.href}
                    className={(pathname == entry.href ? "font-bold " : "") + "transition-[font-weight]"}
                >
                    {entry.name}
                </Link>
            ))}
        </div>
    );
}

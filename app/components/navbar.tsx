"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    const entries: { name: string; href: string }[] = [
        { name: "home", href: "/" },
        { name: "puzzles", href: "/puzzles" },
        { name: "blog", href: "/blog" },
    ];

    const isActive = (href: string) =>
        href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <div className="flex flex-row justify-center space-x-8 text-xl p-4">
            {entries.map((entry) => {
                const active = isActive(entry.href);
                return (
                    <Link
                        key={entry.href}
                        href={entry.href}
                        className={(active ? "font-bold " : "") + "transition-all"}
                    >
                        {active ? `|${entry.name}>` : entry.name}
                    </Link>
                );
            })}
        </div>
    );
}

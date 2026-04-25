"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [hoveredHref, setHoveredHref] = useState<string | null>(null);

    const entries: { name: string; href: string }[] = [
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
                    onMouseEnter={() => setHoveredHref(entry.href)}
                    onMouseLeave={() => setHoveredHref(null)}
                    className={
                        (pathname === entry.href ? "font-bold " : "") +
                        "transition-all"
                    }
                >
                    {hoveredHref === entry.href ? `|${entry.name}>` : entry.name}
                </Link>
            ))}
        </div>
    );
}

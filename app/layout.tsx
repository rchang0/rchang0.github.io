import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import { Source_Serif_4 } from "next/font/google";

export const metadata: Metadata = {
    title: "Rebecca Chang",
    description: "Rebecca Chang's website",
};

const font = Source_Serif_4({
    subsets: ["latin"],
    display: "swap",
    variable: "--font",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${font.variable}`}>
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}

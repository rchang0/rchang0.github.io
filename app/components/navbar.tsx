import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-row justify-center space-x-8 text-xl p-4">
            <Link href="/">home</Link>
            <Link href="/puzzles">puzzles</Link>
            <Link href="/blog">blog</Link>
        </div>
    );
}

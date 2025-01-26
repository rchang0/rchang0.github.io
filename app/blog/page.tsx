import { promises as fs } from "fs";
import Link from "next/link";

export default async function Blog() {
    const posts: { title: string; date: string; path: string }[] = JSON.parse(
        await fs.readFile(process.cwd() + "/app/blog/posts.json", "utf8"),
    );
    return (
        <div className="w-1/2 mx-auto pt-8 flex flex-col space-y-8">
            {posts.map((post) => (
                <Link href={"/blog" + post.path} key={post.path} className="text-xl">
                    {post.date}: {post.title}
                </Link>
            ))}
        </div>
    );
}

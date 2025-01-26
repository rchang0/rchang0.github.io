import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const { default: Post } = await import(`@/content/${slug}.mdx`);
    return (
        <div className="flex flex-col max-w-screen-sm px-8 mx-auto mt-8 mb-16">
            <div className="prose">
                <Post />
            </div>
            <Link href="/blog" className="text-lg font-bold my-16">
                View all blog posts
            </Link>
        </div>
    );
}

export function generateStaticParams() {
    return [{ slug: "mh25" }];
}

export const dynamicParams = false;

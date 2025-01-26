export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const { default: Post } = await import(`@/content/${slug}.mdx`);
    return (
        <div className="max-w-screen-sm px-8 mx-auto mt-8 mb-16 prose">
            <Post />
        </div>
    );
}

export function generateStaticParams() {
    return [{ slug: "mh25" }];
}

export const dynamicParams = false;

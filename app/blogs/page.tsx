import BlogList from "../components/BlogList"
import FeaturedPost from "../components/FeaturedPost"

export default async function BlogsPage({searchParams}: {searchParams: Promise<{ post?: string }>;}) {
    const { post } = await searchParams;

    return (
        <main className="flex gap-8">
            <aside className="w-80">
                <BlogList />
            </aside>

            <section className="flex-1">
                <FeaturedPost selectedPostId={post} />
            </section>
        </main>
    );
}
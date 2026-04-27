import Link from "next/link";
import type { Blog } from "@/types/blog"

type BlogCardProps = {
    blog: Blog;
};

export default function BlogCard({blog}: BlogCardProps) {
    return (
        <Link href={`/blog/${blog.slug}`} className={"group rounded-md border border-l-4 border-gray-500 border-l-transparent bg-secondary-dark p-3 transition hover:border-accent-dark hover:border-l-accent-dark hover:text-foreground hover:shadow-[0_0_12px_#06a77d]"}>
            <article className="p-3">
                <h3 className="font-serif text-lg transition-colors duration-200 group-hover:text-accent-dark">{blog.title}</h3>
                {blog.createdAt.toDateString() && <p className={"text-sm text-gray-300 font-normal italic prose-stone opacity-50"}>{blog.createdAt.toDateString()}</p>}
                {blog.genre && <p className="text-sm text-gray-300">{blog.genre}</p>}
                {blog.description && <p className="mt-1 text-sm">{blog.description}</p>}
            </article>
        </Link>
    )
}
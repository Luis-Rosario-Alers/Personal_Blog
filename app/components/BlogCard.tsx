import Link from "next/link";
import type { Blog } from "@/types/blog"
import Tag from "@/app/components/Tag"

type BlogCardProps = {
    blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {

    return (
        <Link
            href={`/blog/${blog.slug}`}
            className="group rounded-md border border-l-4 border-gray-500 border-l-transparent bg-secondary-dark p-6 transition hover:border-accent-dark hover:border-l-accent-dark hover:text-foreground hover:shadow-[0_0_12px_#06a77d]"
        >
            <article className="p-3">
                <h3 className="font-serif text-xl font-semibold transition-colors duration-200 group-hover:text-accent-dark brightness-105">
                    {blog.title}
                </h3>

                <div className="flex flex-wrap items-center gap-1 font-jetbrains prose-stone text-xs">
                    <span className={"opacity-50"}>Posted: {blog.createdAt}</span>
                    <span aria-hidden="true">•</span>
                    <span className={"opacity-50"}>{blog.genre}</span>
                    <span className="flex flex-wrap items-center">
                        {blog.tags.map((tag) => (
                            <Tag key={tag} tag_name={tag} variant={"cutout"}/>
                        ))}
                    </span>
                </div>

                {blog.description && (
                    <p className="text-sm mt-1">
                        {blog.description}
                    </p>
                )}
            </article>
        </Link>
    );
}
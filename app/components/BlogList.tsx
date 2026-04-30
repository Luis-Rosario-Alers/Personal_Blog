import clientPromise from "@/lib/mongodb";
import BlogCard from "@/app/components/BlogCard";
import type { Blog } from "@/types/blog"
import { formatBlog } from "@/types/blog"
import { notFound } from "next/navigation";

type BlogListProps = {
    limit?: number;
    activeTag?: string;
}

export default async function BlogList({ activeTag, limit }: BlogListProps) {
    const client = await clientPromise;
    const db = client.db("Blog");
    let query;
    let message: string;
    if (activeTag && activeTag.length > 0){
        query = db.collection("Blog Posts").find({ tags: activeTag }).sort({ createdAt: -1 });
        message = "filtered";
    } else {
        query = db.collection("Blog Posts").find({}).sort({ createdAt: -1 });
    }

    if (limit) {
        query = query.limit(limit);
    }

    const blogs = await query.toArray();

    const formattedBlogs: Blog[] = blogs.map((blog) => formatBlog(blog));

    return (
        <div className="flex flex-col gap-4 max-w-prose m-auto">
            <div className="flex flex-col gap-3 ">
                {formattedBlogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
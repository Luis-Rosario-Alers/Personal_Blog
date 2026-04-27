import clientPromise from "@/lib/mongodb";
import BlogCard from "@/app/components/BlogCard";
import type { Blog } from "@/types/blog"
import { formatBlog } from "@/types/blog"

type BlogListProps = {
    limit?: number;
}

export default async function BlogList({limit}: BlogListProps) {
    const client = await clientPromise;
    const db = client.db("Blog");

    let query = db.collection("Blog Posts").find({}).sort({ createdAt: -1 });

    if (limit) {
        query = query.limit(limit);
    }

    const blogs = await query.toArray();

    const formattedBlogs: Blog[] = blogs.map((blog) => formatBlog(blog));



    return (
        <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-3 ">
                {formattedBlogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
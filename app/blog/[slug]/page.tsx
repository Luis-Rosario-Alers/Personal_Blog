import clientPromise from "@/lib/mongodb";
import { marked } from "marked";
import { notFound } from "next/navigation";
import { formatBlog } from "@/types/blog"
import BlogPost from "@/app/components/BlogPost";

marked.setOptions({ breaks: true });

type BlogPostPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    const client = await clientPromise;
    const db = client.db("Blog");

    const blog = await db.collection("Blog Posts").findOne({ slug });
    const formattedBlog = formatBlog(blog);

    if (!blog) {
        notFound();
    }

    return (
        <div className={"mx-auto w-full max-w-3xl px-4 py-10"}>
            <BlogPost blog={formattedBlog}/>
        </div>
    )


}
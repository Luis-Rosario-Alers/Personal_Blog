import clientPromise from "@/lib/mongodb";
import { marked } from 'marked';
import {formatBlog} from "@/types/blog"
import BlogPost from "@/app/components/BlogPost";
import {notFound} from "next/navigation";

marked.setOptions({breaks: true});


export default async function FeaturedPost() {
    const client = await clientPromise;
    const db = client.db("Blog");

    const blog = await db.collection("Blog Posts").findOne({});

    if (!blog) {
        return (
            notFound()
        );
    }

    const formattedBlog = formatBlog(blog);

    return (
        <BlogPost blog={formattedBlog}/>
    );



}
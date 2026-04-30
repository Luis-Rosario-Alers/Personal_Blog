import {ObjectId} from "bson";

export type Blog = {
    _id: ObjectId;
    title: string;
    description?: string;
    content?: string;
    genre?: string;
    createdAt: string;
    slug: string;
    tags: string[];
};

export function formatBlog(blog){
    const formattedBlog: Blog = {
        _id: blog._id,
        title: blog.title,
        description: blog.description,
        content: blog.content,
        genre: blog.genre,
        createdAt: new Date(blog.createdAt).toDateString().split(" ").splice(1).join(" "),
        slug: blog.slug,
        tags: blog.tags,
    }
    return formattedBlog;
}
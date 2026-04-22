import clientPromise from "@/lib/mongodb";

type Blog = {
    _id: string;
    title: string;
    description?: string;
    genre?: string;
    createdAt: Date;
    slug?: string;
}

export default async function BlogList() {
    const client = await clientPromise;
    const db = client.db("Blog");

    const blogs = await db.collection("Blog Posts").find({}).toArray();

    const formattedBlogs: Blog[] = blogs.map((blog) => ({
        _id: blog._id.toString(),
        title: blog.title,
        description: blog.description,
        createdAt: new Date(blog.createdAt), // In ISO 8601 format XXXX-XX-XXTXX:XX:XXZ
        genre: blog.genre,
    }));



    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-serif text-2xl">Blogs</h2>

            <div className="flex flex-col gap-3">
                {formattedBlogs.map((blog) => (
                    <article key={blog._id} className="rounded-md border border-gray-500 p-3">
                        <h3 className="font-serif text-lg">{blog.title}</h3>
                        {blog.createdAt.toDateString() && <p className={"text-sm text-gray-300"}>{blog.createdAt.toDateString()}</p>}
                        {blog.genre && <p className="text-sm text-gray-300">{blog.genre}</p>}
                        {blog.description && <p className="mt-1 text-sm">{blog.description}</p>}
                    </article>
                ))}
            </div>
        </div>
    );
}
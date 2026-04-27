import type { Blog } from "@/types/blog"
import {marked} from "marked";
import Tag from "@/app/components/Tag";


export default async function BlogPost({blog}: {blog: Blog}){
    const html = await marked(blog.content ?? "");
    const timestamp = new Date(blog.createdAt).toDateString();

    return(
        <div className={"content"}>
            <h1>
                {blog.title}
                <div className={"flex flex-row gap-1"}>{blog.tags.map((tag) => <Tag key={tag} tag_name={tag}/>)}</div>
                <div className={"font-normal italic prose-stone opacity-50 text-sm"}>Posted: {timestamp}</div>
            </h1>
            <div dangerouslySetInnerHTML={{ __html : html }}
            />
        </div>
    );
}
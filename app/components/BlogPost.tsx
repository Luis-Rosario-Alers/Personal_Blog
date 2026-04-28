import type { Blog } from "@/types/blog"
import {marked} from "marked";
import Tag from "@/app/components/Tag";


export default async function BlogPost({blog}: {blog: Blog}){
    const html = await marked(blog.content ?? "");

    return(
        <div>
            <h1 className={"mb-2 font-serif text-4xl font-bold leading-tight tracking-normal text-white whitespace-nowrap"}>
                {blog.title}
                <div className={"prose-stone opacity-50 text-sm font-jetbrains"}>Posted: {blog.createdAt} • <span>{blog.genre}</span></div>
                <div className={"flex flex-row gap-1 mt-1"}>{blog.tags.map((tag) => <Tag key={tag} tag_name={tag}/>)}</div>
            </h1>
            <div className={"content"} dangerouslySetInnerHTML={{ __html : html }}
            />
        </div>
    );
}
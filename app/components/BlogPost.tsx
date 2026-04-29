import type { Blog } from "@/types/blog"
import Tag from "@/app/components/Tag";
import Markdown from 'react-markdown'
import Image from 'next/image'

export default async function BlogPost({blog}: {blog: Blog}){
    return(
        <div>
            <h1 className={"mb-2 font-serif text-4xl font-bold leading-tight tracking-normal text-white whitespace-nowrap"}>
                {blog.title}
                <div className={"prose-stone opacity-50 text-sm font-jetbrains"}>Posted: {blog.createdAt} • <span>{blog.genre}</span></div>
                <div className={"flex flex-row gap-1 mt-1"}>{blog.tags.map((tag) => <Tag key={tag} tag_name={tag}/>)}</div>
            </h1>
            <div className={"content"}><Markdown components={{img: (props) => {
                return <Image src={props.src} alt={props.alt}/>;
                    }
                }}>{blog.content}</Markdown></div>
        </div>
    );
}
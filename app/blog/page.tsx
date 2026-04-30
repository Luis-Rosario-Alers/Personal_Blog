import BlogList from "@/app/components/BlogList";
import BlogFilter from "@/app/components/BlogFilter";

export default async function Blog({searchParams}) {
    const params = await searchParams;
    const currentTag: string = params.tag || "";
    console.log("THE SERVER SEES:", currentTag);
    return (
        <div>
            <span className={"text-center"}></span>
            <BlogFilter />
            <div className={"flex flex-col max-w-xl mx-auto"}>
                <h1 className={"text-left uppercase tracking-widest text-xl text-slate-400 mb-5"}>Blog posts</h1>
                <BlogList activeTag={currentTag}/>
            </div>
        </div> // I HAVE TO MAKE A BLOGCARD COMPONENT AND POPULATE IT HERE ...
    )
}
import BlogList from "@/app/components/BlogList";

export default function Blog() {
    return (
        <div>
            <span className={"text-center"}>TODO: Create Input component for searching up blogs by tag</span>
            <div className={"flex flex-col max-w-xl mx-auto"}>
                <h1 className={"text-left uppercase tracking-widest text-xl text-slate-400 mb-5"}>Blog posts</h1>
                <BlogList />
            </div>
        </div> // I HAVE TO MAKE A BLOGCARD COMPONENT AND POPULATE IT HERE ...
    )
}
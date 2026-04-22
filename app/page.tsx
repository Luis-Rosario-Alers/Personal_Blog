import AuthorProfile from "./components/AuthorProfile";
import FeaturedPost from "./components/FeaturedPost";
import BlogList from "./components/BlogList";

export default function Home() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          <div className={"md:col-span-2 flex flex-col gap-8"}>
              <FeaturedPost />
          </div>
          <aside className={"flex flex-col gap-6"}>
              <AuthorProfile />
              <BlogList/>
          </aside>
      </div>
  );
}

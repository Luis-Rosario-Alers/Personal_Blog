import FeaturedPost from "./components/FeaturedPost";
import BlogList from "./components/BlogList";

export default async function Home(){

  return (
      <div className="grid gap-8 max-w-6xl mx-auto mt-10 justify-center">
          <div className={"flex flex-col gap-8 justify-center items-center"}>
              <FeaturedPost/>
              <div className={"font-serif flex-row flex justify-start text-2xl gap-1"}>Want <i className={"decoration-attention underline"}>more?</i></div>
              <BlogList/>
          </div>
      </div>
  );
}

import FeaturedPost from "./components/FeaturedPost";
import BlogList from "./components/BlogList";

export default async function Home(){

  return (
      <div className="grid gap-8 max-w-6xl mx-auto mt-10 justify-center">
          <div className={"flex flex-col grow gap-8 justify-center items-center"}>
              <FeaturedPost/>
              <p className="font-serif text-2xl text-center mt-14">
                  Want{" "}
                  <span className="italic underline decoration-attention">
                      more?
                  </span>
              </p>
              <BlogList/>
          </div>
      </div>
  );
}

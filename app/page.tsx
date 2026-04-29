import FeaturedPost from "./components/FeaturedPost";
import BlogList from "./components/BlogList";
import Image from "next/Image";

export default async function Home(){

  return (
      <div className="grid gap-8 max-w-6xl mx-auto mt-10 justify-center">
          <div className={"flex flex-col grow gap-8 justify-center"}>
              <span className={"flex flex-col text-center"}>
                  <span className={"font-jetbrains font-bold text-2xl"}>Luis's Spot</span>
                  <span className={"font-jetbrains text-sm"}>Enjoy your stay!</span>
              </span>
              <div className={"uppercase tracking-widest text-sm text-slate-400 text-left"}>Featured Post</div>
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

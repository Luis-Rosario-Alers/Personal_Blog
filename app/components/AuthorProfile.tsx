import Image from "next/image"

export default function About() {
  return (
    <div className="flex w-fit flex-col items-center gap-2.5 outline-4 outline-gray-500 bg-black pt-4">
      <Image
        src="/profile_pic.jpg"
        alt="Profile Picture of me."
        width={150}
        height={150}
        className="aspect-square rounded-full object-cover"
      />
        <div className={"font-serif text-2xl"}>Luis Rosario</div>
      <div id="bio" className={"font-serif text-center"}>Hello my name is Luis and sometimes this coding stuff gets to me...</div>
        <div className={"flex flex-col gap-2"}>
            <div className={"text-center text-2xl font-serif"}>Socials</div>
            <div className={"flex gap-5 font-sans"}>
                <div className={"flex columns-2 gap-2.5"}>
                    <div>
                        <Image
                            src={"/Github_Invertocat_White.png"}
                            alt={"Github Logo"}
                            width={20}
                            height={25}/>
                    </div>
                    <a href={"https://github.com/Luis-Rosario-Alers"}>Luis-Rosario-Alers</a>
                </div>

                <div className={"flex gap-2.5"}>
                    <div>
                        <Image src={"/insta-logo.png"} alt={"Instagram Logo"}
                               width={20}
                               height={5}/>
                    </div>
                    <a href={"https://www.instagram.com/urlocal_grape/"}>urlocal_grape</a>
                </div>
            </div>
        </div>
    </div>
  );
}

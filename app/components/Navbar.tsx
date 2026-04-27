import Link from "next/link";

export default function Navbar(){
    return(
        <nav className={"Site-Navigation"}>
            <Link href={"/"}>home</Link>
            <Link href={"/about"}>about me</Link>
            <Link href={"/blog"}>blog</Link>
            <Link href={"https://github.com/Luis-Rosario-Alers"}>GitHub</Link>
            <Link href={"https://www.linkedin.com/in/luis-rosario-19b3a7333/"}>LinkedIn</Link>
        </nav>
    );
}
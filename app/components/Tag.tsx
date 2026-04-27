import Link from "next/link"

type TagPropList = {
    tag_name: string;
}


export default function Tag({tag_name}: TagPropList) {
    return (
        <Link href={`/blog/?tag=${tag_name}`} className={"rounded-full px-2 py-1 text-xs bg-secondary-dark mr-1.5"}>
            #{tag_name}
        </Link>
    );
}
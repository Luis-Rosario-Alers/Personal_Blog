import Link from "next/link"

type TagPropList = {
    tag_name: string;
    variant?: 'default' | 'cutout';
}


export default function Tag({tag_name, variant = 'default'}: TagPropList) {
    const baseStyle = "rounded-full font-jetbrains px-2 py-1 text-xs mr-1.5"

    const variantStyles = {
        default: "bg-secondary-dark",
        cutout: "bg-primary-dark",
    };

    return (
        <Link href={`/blog/?tag=${tag_name}`} className={`${baseStyle} ${variantStyles[variant]}`}>
            <span className={"hover:opacity-75 text-white opacity-100"}>#{tag_name}</span>
        </Link>
    );
}
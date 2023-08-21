

import Link from "next/link";

const BreadcrumbItem = ({ ...props }) => {
    return (
        <li {...props}>
            <Link href={props.href} passHref>
                <a>{props.children}</a>
            </Link>
        </li>
    );
};

export default BreadcrumbItem;
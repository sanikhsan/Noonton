import { Link } from '@inertiajs/react';

export default function AdminMenuItem({
    link,
    text,
    icon,
    isActive,
    method = "get"
}) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
}

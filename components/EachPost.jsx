import Link from "next/link";

export default function EachPost() {
    return(
        <article>
            <Link href='/post'>
                <h3>記事のタイトル</h3>
            </Link>
        </article>
    );
};
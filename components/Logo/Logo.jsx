import Link from "next/link";
import styles from './Logo.module.css'

export default function Logo ({ boxOn = false }) {

    return (
        <Link href='/'>
            <a className={boxOn ? styles.box : styles.basic}>
                CUBE
            </a>
        </Link>
    )
}
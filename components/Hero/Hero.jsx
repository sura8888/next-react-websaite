import Link from "next/link";
import styles from './Hero.module.css'

export default function Hero (props) {
    const {title, subTitle, imageOn = false} = props;

    return (
        <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subTitle}</p>
            {imageOn && (
                <figure>
                    [画像]
                </figure>
            ) }
            <Link href='/about'>
                ABOUT
            </Link>
        </div>
    )
}
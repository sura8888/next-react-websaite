import styles from './Hero.module.css'

export default function Hero (props) {
    const {title, subtitle, imageOn = false} = props;

    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn && 
                <figure>
                    [画像]
                </figure>
            }
        </div>
    )
}
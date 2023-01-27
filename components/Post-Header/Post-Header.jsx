import styles from './Post-Header.module.css'

export default function PostHeader({ title, subtitle, publish = ''}) {
    return (
        <div className={styles.stack}>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}
import styles from 'components/Post-Body/Post-Body.module.css'

export default function PostBody({children}){
    return(
        <div className={styles.stack}>
            {children}
        </div>
    )
}
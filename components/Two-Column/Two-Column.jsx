import styles from './Two-Column.module.css'

export function TwoColumn({children}){
    return(
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}

export function TwoColumnMain({children}){
    <div className={styles.main}>
        {children}
    </div>
}

export function TwoColumnSidebar({children}){
    <div className={styles.sidebar}>
        {children}
    </div>
}
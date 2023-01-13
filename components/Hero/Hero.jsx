import styles from './Hero.module.css'
import Image from 'next/legacy/image';
import cube from 'images/cube.jpg'

export default function Hero (props) {
    const {title, subtitle, imageOn = false} = props;

    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn && (
                <figure className={styles.image}>
                    <Image 
                        src={cube}
                        alt=''
                        layout='responsive'
                        sizes='(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw'
                        priority
                        placeholder='blur'
                    />
                </figure>
            )}
        </div>
    )
}
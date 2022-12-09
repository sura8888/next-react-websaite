import Logo from "components/Logo/Logo"
import styles from './Footer.module.css'
import Container from '../Container/Container'

export default function Footer(){
    return(
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo />
                    [ソーシャル]
                </div>
            </Container>
        </footer>
    )
}
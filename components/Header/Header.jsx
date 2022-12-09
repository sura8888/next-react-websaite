import Logo from '../Logo/Logo.jsx'
import Nav from '../Nav/nav.jsx'
import styles from './Header.module.css'
import Container from '../Container/Container'

export default function Header() {
    return (
        <header>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo boxOn />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}
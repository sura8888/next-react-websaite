import Social from 'components/Social/Social'
import styles from './Contact.module.css'

export default function Contact(){
    return(
        <div className={styles.stack}>
            <h3 className={styles.heading}>Contact</h3>
            <Social iconSize='30px'/>
            <address>cube@web.mail.addresss</address>
        </div>
    )
}
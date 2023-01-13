import styles from './Social.module.css'
import Link from 'next/link'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from 'fortawesome/free-brands-svg-icons'

export default function Social() {
    return(
        <ul className={styles.list}>
            <li>
                <Link href='https://twitter.com/'>
                    <FontAwesimeIcon icon={faTwitter} />
                    <span className='sr-only'>Twitter</span>
                </Link>
            </li>
            <li>

            </li>
        </ul>
    )
}
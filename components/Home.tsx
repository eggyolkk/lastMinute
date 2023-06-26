
import styles from '../styles/home.module.scss';
import Link from 'next/link';

const Home = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}></div>
                <p>Make planning easy.</p>

                <Link 
                    className={styles.createEventButton}
                    href='create-event'
                >
                    Create new event
                </Link>
                <Link 
                    className={styles.hasInviteButton}
                    href='/'
                >
                    I have an invite link
                </Link>
            </div>
        </div>
    )
}

export { Home };

import styles from '../styles/home.module.scss';

const Home = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}></div>
                <p>Make planning with your friends easy.</p>

                <button 
                    className={styles.createEventButton}
                >
                    Create new event
                </button>
                <button 
                    className={styles.hasInviteButton}
                >
                    I have an invite link
                </button>
            </div>
        </div>
    )
}

export { Home };

import styles from '../styles/home.module.scss';

const Home = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}></div>
                <p>Make planning with your friends easy.</p>
            </div>
        </div>
    )
}

export { Home };
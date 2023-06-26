import styles from '../styles/brandnav.module.scss';

const BrandNav = () => {
    return (
        <div className={styles.brandNavContainer}>
            <div className={styles.logo}></div>
            <div className={styles.githubContainer}>
                <a href='https://github.com/eggyolkk/lastMinute' target='/blank'>
                    GitHub
                </a>
            </div>
        </div>
    )
}

export { BrandNav };
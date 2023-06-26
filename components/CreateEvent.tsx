import styles from '../styles/createEvent.module.scss';

const CreateEvent = () => {
    return (
        <div className={styles.createEventContainer}>
            <div className={styles.leftContainer}>
                <h1>Create new event</h1>
                <label htmlFor='name'>What is your event name? *</label>
                <input id='name'></input>
                
                <label htmlFor='details'>Give your event some details</label>
                <textarea id='details'></textarea>
            </div>
            <div className={styles.rightContainer}>
            </div>
        </div>
    )
}

export { CreateEvent }
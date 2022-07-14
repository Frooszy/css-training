import styles from './UserData.module.css'

function UserData() {

    return (
        <div className={styles.Data}>
            <div className={styles.Box}>
                <div className={styles.UserData}>
                    <h1>My Projects</h1>
                    <p>Veja todos</p>
                </div>
            </div>
        </div>
    )

}

export default UserData
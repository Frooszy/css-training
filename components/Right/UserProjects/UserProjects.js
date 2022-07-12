import styles from './UserProjects.module.css'
import Boxes from './Boxes/Boxes'

function UserProjects() {

    return (
        <div className={styles.Projects}>
            <div className={styles.Box}>
                <Boxes />
            </div>
            <div className={styles.Box}>
                <Boxes />
            </div>
        </div>
    )

}

export default UserProjects
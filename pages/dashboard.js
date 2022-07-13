import UserInfo from './../components/Left/UserInfo/UserInfo.js'
import UserData from '../components/Right/UserData/UserData.js'
import UserProjects from '../components/Right/UserProjects/UserProjects.js'
import UserComplements from '../components/Left/UserComplements/UserComplements.js'

import styles from './../styles/dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={styles.General}>
            <div className={styles.Left}>
                <UserInfo />
                <UserComplements />
            </div>
            <div className={styles.Right}>
                <UserData />
                <UserProjects />
            </div>
        </div>
    )
}

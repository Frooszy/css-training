import UserInfo from './../components/Left/UserInfo/UserInfo.js'
import UserData from '../components/Right/Projects/UserData/UserData.js'
import UserProjects from '../components/Right/Projects/UserProjects/UserProjects.js'
import UserComplements from '../components/Left/UserComplements/UserComplements.js'
import UserPosts from '../components/Right/Posts/UserPosts/UserPosts.js'

import styles from './../styles/dashboard.module.css'
import UserContents from '../components/Right/Posts/UserContents/UserContents.js'

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
                <UserPosts />
                <UserContents />
            </div>
        </div>
    )
}

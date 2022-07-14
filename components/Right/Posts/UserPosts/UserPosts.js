import styles from './UserPosts.module.css'

function UserPosts() {

    return (
        <div className={styles.Posts}>
            <div className={styles.Box}>
                <div className={styles.UserPosts}>
                    <h1>Recent Posts</h1>
                </div>
            </div>
        </div>
    )

}

export default UserPosts
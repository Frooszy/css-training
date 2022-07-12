import styles from './UserInfo.module.css'

function UserInfo() {

    return (

        <div className={styles.Info}>
            <div className={styles.Box}>
                <div className={styles.UserDef}>
                    <img src='https://cdn.discordapp.com/attachments/925591601399603290/996453699952066580/unknown.png' />
                    <h1>Frooszy</h1>
                    <p>Full Stack Developer</p>
                </div>
            </div>
        </div>

    )

}

export default UserInfo
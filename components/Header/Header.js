import styles from "./Header.module.css"

function Header() {

    return (
        <div className={styles.Header}>
            <h1 className={styles.Logo}>Kronus</h1>
        </div>
    )

}

export default Header
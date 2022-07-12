import styles from './UserProjects.module.css'
import { BsFileCode } from "react-icons/bs";

function UserProjects() {

    return (
        <div className={styles.Projects}>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <BsFileCode className={styles.FileIcon} />
                    <h1>code-title</h1>
                </div>
                <div className={styles.Content}>
                    <p>Código realizado para testes.</p>
                </div>
                <div className={styles.Others}>
                    <p>100</p>
                    <p>JavaScript</p>
                </div>
            </div>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <BsFileCode className={styles.FileIcon} />
                    <h1>code-title</h1>
                </div>
                <div className={styles.Content}>
                    <p>Código com funcionalidades em desenvolvimento.</p>
                </div>
                <div className={styles.Others}>
                    <p>100</p>
                    <p>JavaScript</p>
                </div>
            </div>
        </div>
    )

}

export default UserProjects
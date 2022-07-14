import styles from './Boxes.module.css'
import { BsFileCode } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

function Boxes() {

    return (

        <div className={styles.Boxes}>
            <div className={styles.Title}>
                <BsFileCode className={styles.FileIcon} />
                <h1>code-title</h1>
            </div>
            <div className={styles.Content}>
                <p>Código realizado para testes.</p>
            </div>
            <div className={styles.Others}>
                <div className={styles.Likes}>
                    <AiFillStar className={styles.StarIcon} />
                    <p>100</p>
                </div>
                <p>JavaScript</p>
            </div>
        </div>

    )

}

export default Boxes
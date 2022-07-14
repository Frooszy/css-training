import styles from './UserProjects.module.css'
import { BsFileCode } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const ProjectUser = [{
    "Name": "Code-Title",
    "Desc": "Código realizado para testes.",
    "Likes": "86",
    "Linguage": "JavaScript"
}, {
    "Name": "Title-Code",
    "Desc": "Código realizado para uma empresa.",
    "Likes": "104",
    "Linguage": "TypeScript"
}]

function UserProjects() {

    return (
        <div className={styles.Projects}>
            {ProjectUser.slice(0, 2).map(itens => (
                <div className={styles.Box}>
                    <div className={styles.Boxes}>
                        <div className={styles.Title}>
                            <BsFileCode className={styles.FileIcon} />
                            <h1>{itens.Name}</h1>
                        </div>
                        <div className={styles.Content}>
                            <p>{itens.Desc}</p>
                        </div>
                        <div className={styles.Others}>
                            <div className={styles.Likes}>
                                <AiFillStar className={styles.StarIcon} />
                                <p>{itens.Likes}</p>
                            </div>
                            <p>{itens.Linguage}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default UserProjects
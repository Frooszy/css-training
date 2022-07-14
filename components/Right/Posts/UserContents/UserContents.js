import styles from './UserContents.module.css'

const Post = [{
    "Logo": "https://cdn.discordapp.com/attachments/925591601399603290/996453699952066580/unknown.png",
    "Title": "DashBoard-React",
    "Data": "14/07/2022",
    "Desc": "Uma descrição de um código qualquer aqui.",
    "Tag": "#JavaScript"
}]

function UserContents() {

    return (
        <div className={styles.Contents}>
            {Post.map(itens => (
                <div className={styles.Box}>
                    <div className={styles.Left}>
                        <img src={itens.Logo} />
                    </div>
                    <div className={styles.Right}>
                        <div className={styles.Title}>
                            <h1>{itens.Title}</h1>
                            <p><strong>{itens.Data}</strong></p>
                        </div>
                        <div className={styles.Content}>
                            <p className={styles.Tag}><strong>{itens.Desc}</strong></p>
                            <p className={styles.Tag2}><strong>{itens.Tag}</strong></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default UserContents
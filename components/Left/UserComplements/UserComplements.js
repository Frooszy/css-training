import styles from './UserComplements.module.css'
import { FiMapPin, FiTwitter } from 'react-icons/fi';
import { BsFillBriefcaseFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { MdMailOutline } from 'react-icons/md';

const info = { "Local": "Brasil", "Job": "Programador", "GH": "Frooszy", "Linkedin": "Frooszy", "Twitter": "Frooszy", "Site": "Frooszy.com", "Contato": "Frooszy@frooszy.com" }

function UserComplements() {

    return (

        <div className={styles.Complements}>
            <div className={styles.Box}>
                <div className={styles.Itens}>
                    <div className={styles.ItemBox}>
                        <FiMapPin />
                        <p><strong>{info.Local}</strong></p>
                    </div>
                    <div className={styles.ItemBox}>
                        <BsFillBriefcaseFill />
                        <p><strong>{info.Job}</strong></p>
                    </div>
                    <div className={styles.ItemBox}>
                        <BsGithub />
                        <p><strong>{info.GH}</strong></p>
                    </div>
                    <div className={styles.ItemBox}>
                        <BsLinkedin />
                        <p><strong>{info.Linkedin}</strong></p>
                    </div>
                    <div className={styles.ItemBox}>
                        <FiTwitter />
                        <p><strong>{info.Twitter}</strong></p>
                    </div>
                    <div className={styles.ItemBox}>
                        <TbWorld />
                        <p><strong>{info.Site}</strong></p>
                    </div>
                    <div className={styles.ItemBox}>
                        <MdMailOutline />
                        <p><strong>{info.Contato}</strong></p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default UserComplements
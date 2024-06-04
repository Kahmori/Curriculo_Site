import styles from "./page.module.css";
import linkedin from '../../assets/linkedin.png'

export default function Footer() {
  return (
    <div className={styles.main}>
        <div>
            <p className={styles.title}>Telefone</p>
            <p className={styles.details}>(11) 96747-4251</p>
        </div>

        <div>
            <p className={styles.title}>E-mail</p>
            <p className={styles.details}>kellyqualy@hotmail.com</p>
        </div>

        <div id={styles.socialMedia}>
            <p className={styles.title}>Me siga</p>
            <a
            href='https://www.linkedin.com/in/kelly-silva-40k40212/'
            target="_blank"
            rel="noopener noreferrer"
            >
                <img 
                    src={linkedin} 
                    alt="Linkedin"
                    width={40}
                    height={40}
                    >
                </img>
            </a>
        </div>

        <div id={styles.copyright}>
            <p>© 2024 por Karine Amorim.</p>
            <p>Todos os Direitos Reservados</p>
        </div>
    </div>
  );
}

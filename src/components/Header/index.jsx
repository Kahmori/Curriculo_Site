import styles from "./page.module.css";

export default function Header() {
    return (
      <div className={styles.main}>
        <div className={styles.flex} id={styles.name}>
            <a href='/' id={styles.circle}>
            </a>
            <p>Kelly Cristina da Silva</p>
        </div>
        <div>
            <ul className={styles.flex} id={styles.list}>
                <li>
                    <a href="/#/curriculo">Currículo</a>
                </li>
                <li className={styles.line} />

                {/*
                <li>
                    <a href="/ResumeProject/#/projetos">Projetos</a>
                </li>
                <li className={styles.line} />
                */}

                <li>
                    <a href="/#/contato">Contato</a>
                </li>
            </ul>
        </div>
      </div>
    );
  }

import styles from "./page.module.css";
import picture from "./assets/pic3.jpg";

export default function App() {
  return (
    <main className={styles.main}>
      <div>
        <img id={styles.profilePic} src={picture} alt="Foto de Kelly"/>
      </div>

      <div className={styles.infoGroup}>
        <p id={styles.greeting}>Olá!</p>
        <div>
          <p id={styles.title}>Um pouco sobre mim</p>
          <div id={styles.brefBlock}>
            <p className={styles.bref}>Enfermeira experiente em pronto-socorro, com sólida formação e habilidades práticas em atendimento emergencial.</p>
            <p className={styles.bref}>Comprometida com a qualidade do atendimento ao paciente e com o trabalho em equipe multidisciplinar</p>
          </div>
        </div>
        <div className={styles.circleGroup}>
          <a href='/#/curriculo'>
            <div className={styles.circleGroup}>
              <span className={styles.navCircles} id={styles.circle1}>Currículo</span>
            </div>
          </a>

{/*
          <a href='/#/projetos'>
            <div className={styles.circleGroup}>
              <span className={styles.navCircles} id={styles.circle2}>Projetos</span>
            </div>
          </a>
*/}

            <a href='/#/contato'>
            <div className={styles.circleGroup}>
              <span className={styles.navCircles} id={styles.circle3}>Contato</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
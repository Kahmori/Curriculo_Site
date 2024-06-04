import React from 'react';
import styles from "./page.module.css";

function Curriculo() {
  return (
    <div id={styles.curriculoBanner} className={styles.normalText}>   
        <p id={styles.pageTitle}>Currículo</p>
        <div className={styles.grid}>
          <p className={styles.sectionTitle}>Formação</p>
          <div>
            <div className={styles.flex}>
                <p className={styles.period}>Cursando</p>
                <div className={styles.blockGap}>
                  <p className={styles.paragraphTitle}>MBA em Gestão de Pessoas | USP</p>
                  <p className={styles}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iure repellendus non enim maxime.</p>
                </div>
            </div>
            <div className={styles.flex}>
              <p className={styles.period}>2020-2024</p>
              <div className={styles.blockGap}>
                <p className={styles.paragraphTitle}>Pós Graduação em Docência | Uninove</p>
                <p className={styles}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iure repellendus non enim maxime.</p>
              </div>
            </div>
            <div className={styles.flex}>
                <p className={styles.period}>2020-2023</p>
                <div className={styles.blockGap}>
                  <p className={styles.paragraphTitle}>Pós Graduação de Gestão em Saúde | Anhembi Morumbi</p>
                  <p className={styles}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iure repellendus non enim maxime.</p>
                </div>
            </div>
            <div className={styles.flex}>
              <p className={styles.period}>2020-2025</p>
              <div className={styles.blockGap}>
                <p className={styles.paragraphTitle}>Graduação em Enfermagem | Uninove</p>
                <p className={styles}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iure repellendus non enim maxime.</p>
              </div>
            </div>
            <div className={styles.flex}>
              <p className={styles.period}>2013-2015</p>
              <div className={styles.blockGap}>
                <p className={styles.paragraphTitle}>Graduação em Radiologia | Uninove</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iure repellendus non enim maxime.</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.grid}>
        <p className={styles.sectionTitle}>Experiência Profissional</p>
          <div>
            <div className={styles.flex}>
              <p className={styles.period}>2020-2025</p>
              <div className={styles.blockGap}>
                <p className={styles.paragraphTitle}>Técnica de Enfermagem | Prevent Senior</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iure repellendus non enim maxime.</p>
              </div>
            </div>
            <div className={styles.flex}>
              <p className={styles.period}>2020-2023</p>
              <div className={styles.blockGap}>
                <p className={styles.paragraphTitle}>Técnica de Enfermagem do Trabalho | Shopee</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, iure repellendus non enim maxime.</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.grid} id={styles.differentGrid}>
        <p className={styles.sectionTitle}>Skills & Especializações</p>
          <div>
            <ul>
              <li>
                <p className={styles.paragraphTitle}>Treinamento em Atendimento Pré-Hospitalar (APH)</p>
                <p>Instituição | Ano</p>
              </li>
              <li>
                <p className={styles.paragraphTitle}>Curso de Coach e Liderança</p>
                <p>Instituição | Ano</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Curriculo;
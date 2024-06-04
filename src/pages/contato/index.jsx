import React from 'react';
import styles from './page.module.css';

function Contato() {
  return (
    <div id={styles.contatoBanner}>
        <div>
          <div>
            <p id={styles.pageTitle}>Contato</p>
            <p className={styles.normalText}>Precisa melhorar a eficiência do seu pronto-socorro? Fale comigo!</p>
          </div>
          <div id={styles.infoGroup}>
            <div>
              <p className={styles.subTitle}>Telefone</p>
              <p className={styles.normalText}>(11) 96747-4251</p>
            </div>
            <div>
              <p className={styles.subTitle}>E-mail</p>
              <p className={styles.normalText}>kellyqualy@hotmail.com</p>
            </div>
          </div>
          
        </div>
        <div id={styles.formGroup}>
          <form action="">
            <div className={styles.row}>
              <div>
                <label htmlFor="">Nome</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Sobrenome</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <label htmlFor="">E-mail</label>
                <input type="text"/>
              </div>
              <div>
                <label htmlFor="">Assunto</label>
                <input type="text"/>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flex}>
                <label htmlFor="">Mensagem</label>
                <textarea />
              </div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contato;
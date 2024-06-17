import React, {useRef} from 'react';
import styles from './page.module.css';

import emailjs from '@emailjs/browser';

function Contato() {
  
  const form = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2kve9ts', 'template_fd1hz6e', form.current, {
        publicKey: 'SpLeMxfW6bnAPssk6',
      })
      .then(
        () => {
          alert(`Sua mensagem foi enviada com sucesso!\nKelly agradece por seu contato :)`);
          console.log('SUCCESS!');
          console.log("message sent");

          nameRef.current.value = '';
          surnameRef.current.value = '';
          subjectRef.current.value = '';
          emailRef.current.value = '';
          messageRef.current.value = '';
        },
        (error) => {
          alert(`Ocorreu um erro, por favor, tente novamente!`);
          console.log('FAILED...', error.text);
        },
      );
  };

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
        <form action="" id='contactForm' ref={form} onSubmit={sendEmail}>
            <div className={styles.row}>
              <div>
                <label htmlFor="nome">Nome</label>
                <input id='name' type="text" name="name" ref={nameRef}/>
              </div>
              <div>
                <label htmlFor="sobrenome">Sobrenome</label>
                <input id='surname' type="text" name="surname" ref={surnameRef}/>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input id='email' type="email" name="email" ref={emailRef}/>
              </div>
              <div>
                <label htmlFor="">Assunto</label>
                <input id='subject' type="text" name="subject" ref={subjectRef}/>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flex}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id='message' name="message" ref={messageRef}/>
              </div>
              <button type="submit" value="Send">Enviar</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contato;
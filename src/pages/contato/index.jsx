import React, {useState} from 'react';
import styles from './page.module.css';
//import enviarEmail from './logic.js';

function Contato() {
  /*useEffect(() => {
    enviarEmail()
   }, []); */

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário de contato submetido');

    const formData = { name, email, subject, message };
    console.log('Dados do formulário:', formData);

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do backend:', data);
      if (data.message) {
        alert('Email enviado com sucesso!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Falha ao enviar email');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Falha ao enviar email');
    });
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
          <form action="" id='contactForm'>
            <div className={styles.row}>
              <div>
                <label htmlFor="nome">Nome</label>
                <input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="sobrenome">Sobrenome</label>
                <input id='surname' type="text" />
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="">Assunto</label>
                <input id='subject' type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flex}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)}/>
              </div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contato;
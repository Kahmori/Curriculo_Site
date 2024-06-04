
//Funciona porém não insere os dados.


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'karineamor30@gmail.com',
    pass: 'tcyp gpcy hamv kkmo',
  },
});

const mailOptions = {
  from: 'karineamor30@gmail.com',
  to: 'miromaenirak@gmail.com',
  subject: 'Contato referente ao seu Currículo!',
  text: `Aqui estão os dados referente ao contato...\nNome: `,
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error){
    console.log('nao enviado:', error);
  }
  console.log('enviado:', info.response);
});
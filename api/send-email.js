const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

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
            subject: subject || 'Contato referente ao seu Currículo!',
            text: `Nome: ${name}\n\nMensagem: ${message}\n\nEmail: ${email}`,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email enviado: ' + info.response });
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}

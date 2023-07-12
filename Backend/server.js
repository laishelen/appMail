const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
    const {to, subject, text} = req.body;  

    let transporter = nodemailer.createTransport({
        host: "smtp.sapo.pt",
        port: 587,
        secure: false,
        auth: {
            user: 'seuemail@gmail.com', // Seu email
            pass: 'sua_senha' // Sua senha
        }
    });

    let info = await transporter.sendMail({
        from: 'seuemail@gmail.com', // Endereço de email do remetente
        to: to,
        subject: subject,
        text: text,
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Email sent");
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/mailer', async (req, res) => {
	try {
		const { mailData, mailerInfo } = req.body;
		let transporter = nodemailer.createTransport(mailerInfo);
		let mail = await transporter.sendMail(mailData);
		response = { message: 'Mail Sent', mailData: mail };
	} catch (e) {
		response = { message: 'Mail Failed', error: e };
	}
	console.log(response)
	res.send(response);
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log('Server started...'));

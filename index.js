const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors())

app.post("/api/mailer", async (req, res) => {
  try {
    const { mailData, mailerInfo } = req.body;
    let transporter = nodemailer.createTransport(mailerInfo);
    let mail = await transporter.sendMail(mailData);
    response = { message: "Mail Sent", mailData: mail };

    res.status(200).json(response);
  } catch (e) {
    response = { message: "Mail Failed", error: e };
    res.status(503).json(response);
  }
  console.log(response);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started..."));

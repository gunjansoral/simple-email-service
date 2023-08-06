const nodemailer = require('nodemailer');
require('dotenv').config();

const { EMAIL, PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  post: 587,
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
});

async function main() {
  try {
    const info = await transporter.sendMail({
      from: "foo@example.com", // sender address
      to: "talegi9462@wiemei.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<h1>Hello world?</h1>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

main();


const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const filename_base = process.env.FILENAME_BASE;
const url_base = process.env.URL_BASE;
const apiKey = process.env.SENDGRID_APIKEY;


const smtpTransport = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: apiKey,
    })
  );
  return transport;
};

const sendEmail = async (vessel, inf) => {
  let fileName;
  let url;
  if (!inf){
    fileName = filename_base;
    url = url_base;
  }else{
    fileName = inf.filename;
    url = inf.url;
  };

  const transporter = smtpTransport();
  const message = await transporter.sendMail({
    from: '"TERRANET" <ccherrez18@gmail.com>',
    to: `${vessel.to}`,
    subject: `${vessel.subject}`,
    html: `${vessel.html} <img src="cid:${fileName}"/>`,
    attachments:[
      {
        filename: fileName,
        path: url,
        cid: fileName
      }
    ]
  });

  console.log("Message sent: %S", message.messageId);
  return
}

module.exports = sendEmail

const sgMail = require("@sendgrid/mail")
sgMail.setApiKey('your APIKey from SendGrid Panel')
const msg = {
    to: "xxxx@gmail.com",
    from: "xxxx@gmail.com",
    subject: "Sending from node using SendGrid",
    text: "for fun easy to do",
    html: "<strong>Hello world !</strong>"
}

sgMail.send(msg)
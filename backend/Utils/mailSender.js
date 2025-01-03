const nodemailer = require('nodemailer');
require('dotenv').config();

exports.mailSender = async (email, otp, body) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.ADMIN_MAIL_ID,
                pass: process.env.ADMIN_MAIL_PASS
            }
        })
        console.log("sended mail");
        let info = await transporter.sendMail({
            from: `UrbanSole`,
            to: `${email}`,
            subject: `OTP Varification`,
            html: `${body}`
        })
        console.log(otp);
        return info;
    } catch (error) {
        console.log("Error in Sending Mail: ", error.message);
        return error;
    }
}

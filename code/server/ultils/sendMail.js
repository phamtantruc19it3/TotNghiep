const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
const { Model } = require("mongoose");

const sendMail = asyncHandler(async ({ email, html }) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });
    let info = await transporter.sendMail({
        from: '" cửa hàng điện tử  " <ngaibenktv3@gmail.com>',
        to: email,
        subject: " forgot password  ",
        text: " hello chaof a",
        html: html,
    });
    return info
}
)

module.exports = sendMail

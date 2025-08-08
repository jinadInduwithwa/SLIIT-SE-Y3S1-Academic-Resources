// Manages email handling features
const nodeMail = require("nodemailer");

const EmailController = async (req, res) => {
  const { email, subject, text } = req.body;

  console.log(email, subject, text);
  try {
    const transporter = nodeMail.createTransport({
      service: "gmail",
      auth: {
        user: "isharamadusanka0714@gmail.com",
        pass: "oddlakwxossufvui",
      },
    });

    await transporter.sendMail({
      from: "isharamadusanka0714@gmail.com",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email Sent Successfully");
    res.json({
      status: "success",
      message: "Email Sent Successfully",
    });
  } catch (error) {
    // handle errors
    console.log("Email Not Sent");
    console.log(error);
  }
};

module.exports = EmailController;

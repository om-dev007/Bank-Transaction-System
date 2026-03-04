import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendRegistrationEmail = async (email, name) => {

  try {

    const info = await transporter.sendMail({
      from: `"Backend Ledger" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Backend Ledger",
      html: `
      <div style="font-family:sans-serif">
        <h2>Welcome ${name} 👋</h2>
        <p>Thank you for registering at <b>Backend Ledger</b>.</p>
        <p>We are excited to have you on board 🚀</p>
      </div>
      `
    });

    console.log("Email sent:", info.messageId);

  } catch (error) {
    console.error("Email error:", error);
  }

};
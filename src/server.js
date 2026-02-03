// server.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:"anandhuugi25@gmail.com" ,       // your Gmail address
    pass: process.env.GMAIL_APP_PASS,  // app password, not normal password
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, company, mobile, subject, message } = req.body;
  const html = `<p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || "-"}</p>
                <p><strong>Mobile:</strong> ${mobile || "-"}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message || "-"}</p>`;

  try {
    await transporter.sendMail({
      from: `"Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_GMAIL,   // set this to your Gmail address
      subject: `Website contact: ${subject}`,
      html,
      replyTo: email,                    // lets you reply to the visitor
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(process.env.PORT || 3001);

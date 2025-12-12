import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST handler for contact form
export async function POST(req: Request) {

    console.log("helooooo");
    
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("bodyyy", body);
    

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // set true if using 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // Your receiving email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
  let message = "Unknown error";

  if (error instanceof Error) {
    message = error.message;
  }

  console.error("Mail Error:", message);

  return NextResponse.json(
    { success: false, message: "Failed to send message. Please try again later." },
    { status: 500 }
  );
  }}

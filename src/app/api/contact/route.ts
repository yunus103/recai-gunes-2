import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email structure
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Recommended by Google Workspace to use authorized sender
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `İletişim Formu: ${subject} - ${name}`,
      text: `
        İsim: ${name}
        E-posta: ${email}
        Konu: ${subject}
        Mesaj: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d4af37;">Yeni İletişim Mesajı</h2>
          <p><strong>İsim:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #d4af37;">
            <p><strong>Mesaj:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'E-posta başarıyla gönderildi' }, { status: 200 })
  } catch (error: any) {
    console.error('Nodemailer Error:', error)
    return NextResponse.json(
      { message: 'E-posta gönderilirken bir hata oluştu', error: error.message },
      { status: 500 }
    )
  }
}

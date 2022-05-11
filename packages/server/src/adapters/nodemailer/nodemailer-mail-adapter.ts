import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Gonçalves <die.goncalves1990@gmail.com>',
      subject,
      html: body
    })
  }
}

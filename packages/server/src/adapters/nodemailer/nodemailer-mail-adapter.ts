import { MailAdapter, SendMailData } from '../mail-adapter'
import {
  chatBase64,
  airplaneBase64,
  facebookBase64,
  instagramBase64,
  twitterBase64
} from '../../utils/iconsbase64'
import nodemailer from 'nodemailer'

const emailTemplate = (
  type: string,
  comment: string,
  screenshot: string | undefined
) => {
  return `<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      width: 100%;
      height: 100%;
      margin: 0px auto;
      padding: 0px;
      font-family: Inter, sans-serif;
      background-color: #f4f4f5;
    "
  >
    <header
      style="
        display: flex;
        width: 640px;
        margin: 4px auto;
        background-color: #ffffff;
      "
    >
      <a
        href="#"
        target="_blank"
        style="
          display: flex;
          margin: auto;
          color: #8257e5;
          text-decoration: none;
          padding: 12px 0px;
        "
      >
        <img style="width: 28px; height: 28px" src=${chatBase64} alt="chat" />
        <span
          style="
            font-size: 24px;
            font-weight: 500;
            line-height: 27px;
            margin: 0px 0px 0px 8px;
          "
          >Feedget</span
        >
      </a>
    </header>
    <main style="width: 640px; margin: 4px auto; background-color: #ffffff">
      <h1
        style="
          padding: 16px 16px 8px;
          font-family: Inter, sans-serif;
          font-size: 20px;
          line-height: 24px;
          color: #27272a;
          font-weight: bold;
          margin: 0px;
        "
      >
        ${type}
      </h1>
      <p
        style="
          padding: 0px 16px 16px;
          font-family: Inter, sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #27272a;
          margin: 0px;
        "
      >
        ${comment}
      </p>

      ${
        screenshot
          ? `<img
        src=${screenshot}
        alt="Imagem do feedback"
        style="
          width: 100%;
          height: 360px;
          object-fit: cover;
          background-color: #ffffff;
        "
      />`
          : `<div></div>`
      }
      
    </main>

    <div
      style="
        width: 640px;
        margin: 4px auto;
        background-color: #ffffff;
        padding: 16px 0px;
      "
    >
      <section
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 4px 0px;
        "
      >
        <div>
          <a href="#" target="_blank" style="text-decoration: none">
            <img
              style="width: 32px; height: 32px"
              src=${facebookBase64}
              alt="facebook"
            />
          </a>

          <a
            href="#"
            target="_blank"
            style="text-decoration: none; margin: 0px 8px"
          >
            <img
              style="width: 32px; height: 32px"
              src=${twitterBase64}
              alt="twitter"
            />
          </a>

          <a href="#" target="_blank" style="text-decoration: none">
            <img
              style="width: 32px; height: 32px"
              src=${instagramBase64}
              alt="instagram"
            />
          </a>
        </div>
        <p
          style="
            font-size: 16px;
            line-height: 24px;
            color: #27272a;
            font-weight: bold;
          "
        >
          Para problemas e dúvidas nos envie um email
        </p>
        <div style="display: flex;">
          <a
            href="mailto:feedget.company@gmail.com"
            style="text-decoration: none; line-height: 16px"
          >
            <img
              style="width: 16px; height: 16px"
              src=${airplaneBase64}
              alt="airplane"
            />
          </a>

          <a
            href="mailto:feedget.company@gmail.com"
            style="
              text-decoration: none;
              color: #71717a;
              font-size: 12px;
              line-height: 16px;
              margin: 0px 0px 0px 8px;
            "
            >feedget.company@gmail.com</a
          >
        </div>
      </section>
    </div>

    <footer
      style="
        display: flex;
        align-items: center;
        width: 640px;
        margin: 4px auto;
        font-size: 12px;
        line-height: 16px;
        color: #434343;
        padding: 16px 0px;
        background-color: #ffffff;
      "
    >
      <p style="margin: 0px 0px 0px 16px;">&copy; Feedget 2022 &nbsp;|&nbsp;</p>
      <a
        href="#"
        target="_blank"
        style="text-decoration: underline; color: #434343"
        >Unsubscribe</a
      >
    </footer>
  </body>
</html>
`
}

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, variables }: SendMailData) {
    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_EMAIL_USERNAME,
        pass: process.env.MAILTRAP_EMAIL_PASSWORD
      }
    })

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Gonçalves <die.goncalves1990@gmail.com>',
      subject,
      html: emailTemplate(
        variables.type,
        variables.comment,
        variables.screenshot
      )
    })
  }
}

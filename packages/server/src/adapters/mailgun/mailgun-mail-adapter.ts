import { MailAdapter, SendMailData } from '../mail-adapter'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import {
  chat,
  facebook,
  twitter,
  instagram,
  airplane
} from '../../utils/iconsbase64'

const emailGmailTemplate = (
  type: string,
  comment: string,
  screenshot: string | undefined
) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <title>feedget</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
      <meta name="format-detection" content="telephone=no" />
      <!--[if !mso]><!-->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <!--<![endif]-->
      <style type="text/css">
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100% !important;
          -ms-text-size-adjust: 100% !important;
          -webkit-font-smoothing: antialiased !important;
        }
        img {
          border: 0 !important;
          outline: none !important;
        }
        p {
          margin: 0px !important;
          padding: 0px !important;
        }
        table {
          border-collapse: collapse;
          mso-table-lspace: 0px;
          mso-table-rspace: 0px;
        }
        td,
        a,
        span {
          border-collapse: collapse;
          mso-line-height-rule: exactly;
        }
        .box_a_title {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      </style>
      <script src="https://unpkg.com/phosphor-icons"></script>
    </head>
  
    <body
      style="width: 100% !important; height: 100%; margin: 0px auto; padding: 0px; font-family: Inter, sans-serif; background-color: #f4f4f5;"
    >
      <!-- Title -->
      <table
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
        style="width:100% !important;"
      >
        <tr>
          <td align="center" style="display: flex; margin: 4px 0px;">
            <table 
              align="center"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="width: 640px !important; table-layout: fixed; background-color: #ffffff"
            >  
              <tr>
                <td 
                  align="center"
                  style="padding: 0px 32px !important"
                >
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr>
                      <td style="display: flex">
                        <a href="#" target="_blank" style="display: flex; margin: auto; color: #8257e5; text-decoration: none; padding: 12px 0px">
                        <img style="width: 28px; height: 28px" src="cid:chat.png" alt="chat" />
                        <span style="font-size: 24px; font-weight: 500; line-height: 27px; margin: 0px 0px 0px 8px">Feedget</span>
                        </a>
                      </td>
                    </tr>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- Content -->
      <table 
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
        style="width:100% !important;"
      >
        <tr>
          <td align="center">
            <table
              align="center"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="width: 640px !important; table-layout: fixed; background-color: #ffffff;"
            >
              <!-- Title feedback -->
              <tr>
                <td
                  style="
                    padding: 16px 16px 8px;
                    font-family: Inter, sans-serif;
                    font-size: 20px;
                    line-height: 24px;
                    color: #27272a;
                    font-weight: bold;
                  "
                >
                  ${type}
                </td>
              </tr>
              <!-- Content feedback -->
              <tr>
                <td
                  valign="top"
                  style="
                    padding: 0px 16px 16px;
                    font-family: Inter, sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    color: #27272a;
                  "
                >
                  ${comment}
                </td>
              </tr>
              <!-- Screenshot -->
              ${
                screenshot
                  ? `<tr>
                <td style="display: flex;">
                  <img
                    src="cid:screenshot.png"
                    alt="Imagem do feedback"
                    style="
                      width: 100%;
                      height: 360px;
                      object-fit: cover;
                      background-color: #ffffff;
                    "
                  />
                </td>
              </tr>`
                  : `<div></div>`
              }
            </table>
          </td>
        </tr>
      </table>
      <!-- Contacts -->
      <table 
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
        style="width:100% !important;"
      >
        <tr>
          <td 
            align="center" 
            style="display: flex; margin: 4px 0px 0px;"
          >
            <table
              align="center"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="width: 640px !important; table-layout: fixed; background-color: #ffffff;"
            >
              <!-- Social media -->
              <tr>
                <td style="padding: 16px 16px 8px;">
                  <table 
                    align="center"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td>
                      <a href="#" target="_blank" style="text-decoration: none">
                        <img style="width: 32px; height: 32px" src="cid:facebook.png" alt="facebook" />
                      </a>
            
                      <a href="#" target="_blank" style="text-decoration: none; margin: 0px 8px;">
                        <img style="width: 32px; height: 32px" src="cid:twitter.png" alt="twitter" />
                      </a>
            
                      <a href="#" target="_blank" style="text-decoration: none">
                        <img style="width: 32px; height: 32px" src="cid:instagram.png" alt="instagram" />
                      </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Problems -->
              <tr>
                <td>
                  <table 
                    align="center"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td>
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
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Email -->
              <tr>
                <td style="padding: 8px 16px 16px;">
                  <table 
                    align="center"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td style="display: flex">
                        <a
                          href="mailto:feedget.company@gmail.com"
                          style="text-decoration: none; line-height: 16px;"
                        >
                          <img style="width: 16px; height: 16px" src="cid:airplane.png" alt="airplane" />
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
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- Footer -->
      <table 
        border="0" 
        width="100%" 
        cellspacing="0" 
        align="center" 
        cellpadding="0" 
        style="width:100% !important"
      >
        <tr>
          <td
            align="center"
            style="
              display: flex;
              margin: 4px 0px 4px;
            "
          >
            <table
              align="center"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="width: 640px !important; table-layout: fixed; background-color: #ffffff"
            >
              <tr>
                <td style="padding: 16px 32px">
                  <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td>
                        <table cellspacing="0" cellpadding="0">
                          <tr>
                            <td
                              style="
                                font-family: Inter, sans-serif;
                                font-size: 11px;
                                line-height: 16px;
                                color: #434343;
                              "
                            >
                              &copy; Feedget 2022 &nbsp;|&nbsp;
                              <a
                                href="#"
                                target="_blank"
                                style="text-decoration: underline; color: #434343"
                                >Unsubscribe</a
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `
}

const imagesAndIcons = (screenshotbase64: string | undefined) => {
  const screenshot = screenshotbase64
    ? screenshotbase64.replace('data:image/png;base64,', '')
    : ''
  const bufferScreenshot = Buffer.from(screenshot, 'base64')

  const bufferChat = Buffer.from(chat, 'base64')
  const bufferFacebook = Buffer.from(facebook, 'base64')
  const bufferTwitter = Buffer.from(twitter, 'base64')
  const bufferInstagram = Buffer.from(instagram, 'base64')
  const bufferAirplane = Buffer.from(airplane, 'base64')

  const icons = [
    {
      filename: 'chat.png',
      data: bufferChat
    },
    {
      filename: 'facebook.png',
      data: bufferFacebook
    },
    {
      filename: 'twitter.png',
      data: bufferTwitter
    },
    {
      filename: 'instagram.png',
      data: bufferInstagram
    },
    {
      filename: 'airplane.png',
      data: bufferAirplane
    }
  ]
  const inline = screenshotbase64
    ? [
        ...icons,
        {
          filename: 'screenshot.png',
          data: bufferScreenshot
        }
      ]
    : icons

  const attachment = screenshotbase64
    ? [
        {
          filename: 'screenshot.png',
          data: bufferScreenshot
        }
      ]
    : undefined

  return { inline, attachment }
}

export class MailgunMailAdapter implements MailAdapter {
  async sendMail({ subject, variables }: SendMailData) {
    const mail = new Mailgun(formData)
    const client = mail.client({
      username: 'api',
      key: `${process.env.MAILGUN_API_KEY}`
    })

    const { inline, attachment } = imagesAndIcons(variables.screenshot)

    await client.messages.create(`${process.env.MAILGUN_DOMAIN}`, {
      from: `Equipe Feedget <feedget.company@gmail.com>`,
      to: 'die.goncalves1990@gmail.com',
      subject,
      html: emailGmailTemplate(
        variables.type,
        variables.comment,
        variables.screenshot
      ),
      inline,
      attachment
    })
  }
}

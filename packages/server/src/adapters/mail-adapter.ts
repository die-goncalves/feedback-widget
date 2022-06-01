export interface SendMailData {
  subject: string
  variables: { type: string; comment: string; screenshot?: string }
}

export interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>
}

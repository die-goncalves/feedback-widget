import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'
import { GetFeedbackUseCase } from './use-cases/get-feedback-use-case'
import { GetOneFeedbackUseCase } from './use-cases/get-one-feedback-use-case'
import { UpdateFeedbackUseCase } from './use-cases/update-feedback-use-case'
import { MailgunMailAdapter } from './adapters/mailgun/mailgun-mail-adapter'

export const routes = express.Router()

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN
})
const checkAdmScopes = requiredScopes([
  'read:feedbacks',
  'update:feedbacks',
  'delete:feedbacks'
])

routes.post('/create/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  // const nodemailerMailAdapter = new NodemailerMailAdapter()
  const mailgunMailAdapter = new MailgunMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    mailgunMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})

routes.get('/feedbacks', checkJwt, checkAdmScopes, async (req, res) => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

  const getFeedbackUseCase = new GetFeedbackUseCase(prismaFeedbacksRepository)

  const response = await getFeedbackUseCase.execute()

  return res.status(200).send({ data: response })
})

routes.get('/feedback', checkJwt, checkAdmScopes, async (req, res) => {
  const { id } = req.query as { id: string }

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

  const getOneFeedbackUseCase = new GetOneFeedbackUseCase(
    prismaFeedbacksRepository
  )

  const response = await getOneFeedbackUseCase.execute({ id })
  return res.status(200).send({ data: response })
})

routes.put('/update/feedback', checkJwt, checkAdmScopes, async (req, res) => {
  const { id } = req.body
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

  const updateFeedbackUseCase = new UpdateFeedbackUseCase(
    prismaFeedbacksRepository
  )

  const response = await updateFeedbackUseCase.execute({ id })

  return res.status(200).send({ data: response })
})

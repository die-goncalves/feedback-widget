import { MailAdapter } from '../adapters/mail-adapter'
import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface SubmitFeedbackUseCaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository
  private mailAdapter: MailAdapter

  constructor(
    feedbacksRepository: FeedbacksRepository,
    mailAdapter: MailAdapter
  ) {
    this.feedbacksRepository = feedbacksRepository
    this.mailAdapter = mailAdapter
  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { comment, type, screenshot } = request

    if (!comment) {
      throw new Error('The feedback must have a comment')
    }
    if (!type) {
      throw new Error('The feedback needs to have a type')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: `Feedback: ${type}`,
      variables: {
        type,
        comment,
        screenshot
      }
    })
  }
}

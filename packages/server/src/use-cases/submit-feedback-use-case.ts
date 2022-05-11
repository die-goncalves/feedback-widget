import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface SubmitFeedbackUseCaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository

  constructor(feedbacksRepository: FeedbacksRepository) {
    this.feedbacksRepository = feedbacksRepository
  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { comment, type, screenshot } = request

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })
  }
}

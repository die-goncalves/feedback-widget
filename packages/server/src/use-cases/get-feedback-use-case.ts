import { FeedbacksRepository } from '../repositories/feedbacks-repository'

export class GetFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository

  constructor(feedbacksRepository: FeedbacksRepository) {
    this.feedbacksRepository = feedbacksRepository
  }

  async execute() {
    const response = await this.feedbacksRepository.get()
    return response
  }
}

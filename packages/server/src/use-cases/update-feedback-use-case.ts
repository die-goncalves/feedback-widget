import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface UpdateFeedbackUseCaseRequest {
  id: string
}

export class UpdateFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository

  constructor(feedbacksRepository: FeedbacksRepository) {
    this.feedbacksRepository = feedbacksRepository
  }

  async execute({ id }: UpdateFeedbackUseCaseRequest) {
    const response = await this.feedbacksRepository.update({ id })
    return response
  }
}

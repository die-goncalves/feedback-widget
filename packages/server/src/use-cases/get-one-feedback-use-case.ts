import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface GetOneFeedbackUseCaseRequest {
  id: string
}

export class GetOneFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository

  constructor(feedbacksRepository: FeedbacksRepository) {
    this.feedbacksRepository = feedbacksRepository
  }

  async execute({ id }: GetOneFeedbackUseCaseRequest) {
    const response = await this.feedbacksRepository.getOne({ id })
    return response
  }
}

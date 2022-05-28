import { prisma } from '../../prisma'
import {
  FeedbackCreateData,
  FeedbackData,
  FeedbacksRepository
} from '../feedbacks-repository'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
        checked: false
      }
    })
  }

  async get(): Promise<FeedbackData[]> {
    return await prisma.feedback.findMany()
  }
}

import { prisma } from '../../prisma'
import {
  FeedbackCreateData,
  FeedbackData,
  FeedbackGetOneData,
  FeedbacksRepository,
  FeedbackUpdateData
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

  async getOne({ id }: FeedbackGetOneData): Promise<FeedbackData | null> {
    return await prisma.feedback.findFirst({
      where: {
        id
      }
    })
  }

  async update({ id }: FeedbackUpdateData): Promise<FeedbackData> {
    const oldCheck = await prisma.feedback.findFirst({
      where: {
        id
      }
    })

    return await prisma.feedback.update({
      where: {
        id
      },
      data: {
        updatedAt: new Date().toISOString(),
        checked: !oldCheck?.checked
      }
    })
  }
}

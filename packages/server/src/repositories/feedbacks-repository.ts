export interface FeedbackCreateData {
  type: string
  comment: string
  screenshot?: string
}

export interface FeedbackData {
  id: string
  type: string
  comment: string
  screenshot: string | null

  createdAt: Date
  updatedAt: Date | null
  checked: boolean
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>
  get: () => Promise<FeedbackData[]>
}

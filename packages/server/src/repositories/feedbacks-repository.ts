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

export interface FeedbackGetOneData {
  id: string
}

export interface FeedbackUpdateData {
  id: string
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>
  get: () => Promise<FeedbackData[]>
  getOne: (data: FeedbackGetOneData) => Promise<FeedbackData | null>
  update: (data: FeedbackUpdateData) => Promise<FeedbackData>
}

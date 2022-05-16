import { CloseButton } from './CloseButton'
import { BackButton } from './BackButton'
import { feedbackTypes, FeedbackTypes } from '../utils/feedbackTypes'

type HeaderProps = {
  feedbackType: FeedbackTypes | null
  restartFeedback: () => void
  feedbackSent: boolean
}

export function Header({
  feedbackType,
  restartFeedback,
  feedbackSent
}: HeaderProps) {
  const feedbackTypeInfo = feedbackType ? feedbackTypes[feedbackType] : null

  return (
    <header>
      {!feedbackSent &&
        (!feedbackTypeInfo ? (
          <h1 className="text-[1.25rem] leading-[1.5rem] font-medium text-dark/text-primary">
            Deixe seu feedback
          </h1>
        ) : (
          <>
            <BackButton restartFeedback={restartFeedback} />
            <div className="flex">
              <img
                className="w-6 mr-2"
                src={feedbackTypeInfo.image.source}
                alt={feedbackTypeInfo.image.alt}
              />
              <h1 className="text-[1.25rem] leading-[1.5rem] font-medium text-dark/text-primary">
                {feedbackTypeInfo.title}
              </h1>
            </div>
          </>
        ))}

      <CloseButton />
    </header>
  )
}

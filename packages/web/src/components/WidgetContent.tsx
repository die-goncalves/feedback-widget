import { useState } from 'react'
import { FeedbackTypes } from '../utils/feedbackTypes'
import { FeedbackSelection } from './FeedbackSelection'
import { Footer } from './Footer'
import { Header } from './Header'
import { SelectedFeedback } from './SelectedFeedback'
import { SuccessFeedback } from './SuccessFeedback'

export function WidgetContent() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="w-[21rem] h-[16.5rem] bg-dark/surface-primary p-4 rounded-[1rem] relative flex flex-col items-center shadow-lg">
      <Header
        feedbackType={feedbackType}
        feedbackSent={feedbackSent}
        restartFeedback={handleRestartFeedback}
      />

      {feedbackSent ? (
        <SuccessFeedback restartFeedback={handleRestartFeedback} />
      ) : !feedbackType ? (
        <FeedbackSelection setFeedbackType={setFeedbackType} />
      ) : (
        <SelectedFeedback
          feedbackType={feedbackType}
          setFeedbackSent={setFeedbackSent}
        />
      )}

      <Footer />
    </div>
  )
}

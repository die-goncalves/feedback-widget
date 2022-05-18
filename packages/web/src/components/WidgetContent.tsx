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
    <>
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
    </>
  )
}

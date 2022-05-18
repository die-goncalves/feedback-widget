import { FeedbackTypes, feedbackTypes } from '../utils/feedbackTypes'

type FeedbackSelectionProps = {
  setFeedbackType: (state: FeedbackTypes) => void
}

export function FeedbackSelection({ setFeedbackType }: FeedbackSelectionProps) {
  return (
    <div className="flex mt-8 mb-12 gap-2">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            onClick={() => setFeedbackType(key as FeedbackTypes)}
            className="w-24 h-28 bg-light/surface-secondary dark:bg-dark/surface-secondary rounded-[0.5rem] flex flex-col items-center justify-center gap-2 border-[0.125rem] transition-[border, hover] duration-300 ease-out border-transparent hover:border-brand hover:bg-light/surface-secondary-hover dark:hover:bg-dark/surface-secondary-hover focus:border-brand focus:bg-light/surface-secondary-hover dark:focus:bg-dark/surface-secondary-hover focus:outline-none outline-none"
            aria-label={value.title}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span className="text-[0.875rem] leading-[1.5rem] font-medium text-light/text-primary dark:text-dark/text-primary">
              {value.title}
            </span>
          </button>
        )
      })}
    </div>
  )
}

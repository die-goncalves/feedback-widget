import { CircleNotch } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { api } from '../lib/api'
import { FeedbackTypes } from '../utils/feedbackTypes'
import { ScreenshotButton } from './ScreenshotButton'

type SelectedFeedbackProps = {
  feedbackType: FeedbackTypes
  setFeedbackSent: (state: boolean) => void
}

const placeholder = (feedbackType: FeedbackTypes) => {
  switch (feedbackType) {
    case 'BUG':
      return 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
    case 'IDEA':
      return 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!'
    case 'OTHER':
      return 'Queremos te ouvir. O que você gostaria de nos dizer?'
    default:
      break
  }
}

export function SelectedFeedback({
  feedbackType,
  setFeedbackSent
}: SelectedFeedbackProps) {
  const [textareaChange, setTextareaChange] = useState<string>('')
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [sendingFeedback, setSendingFeedback] = useState<boolean>(false)

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    setSendingFeedback(true)
    await api.post('/create/feedback', {
      type: feedbackType,
      comment: textareaChange,
      screenshot
    })
    setSendingFeedback(false)

    setFeedbackSent(true)
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextareaChange(event.target.value)
  }

  return (
    <form onSubmit={handleSubmitFeedback} className="flex flex-col my-4 gap-2">
      <div className="flex w-[19rem] h-28 rounded-[0.25rem] ring-[0.0625rem] ring-inset ring-light/stroke dark:ring-dark/stroke">
        <textarea
          style={{
            scrollbarGutter: 'stable'
          }}
          onChange={handleTextareaChange}
          className=" w-full text-light/text-primary dark:text-dark/text-primary caret-brand transition-[border] duration-300 ease-out scrollbar-textarea light-scrollbar-textarea dark:dark-scrollbar-textarea scroll-smooth scroll-pb-4 cursor-auto pl-3 py-2 text-[0.875rem] border-[0.125rem] border-transparent rounded-[0.25rem] bg-transparent placeholder:text-light/text-secondary dark:placeholder:text-dark/text-secondary placeholder:text-[0.875rem] focus:outline-none focus:border-brand resize-none"
          placeholder={placeholder(feedbackType)}
        />
      </div>

      <footer className="flex">
        <ScreenshotButton
          screenshot={screenshot}
          onScreenshotTook={setScreenshot}
        />
        <button
          type="submit"
          disabled={!textareaChange || sendingFeedback}
          aria-disabled={!textareaChange || sendingFeedback}
          className="flex flex-1 ml-2 justify-center items-center rounded-[0.25rem]  text-text-on-brand-color bg-brand hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-brand transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light/surface-primary dark:focus:ring-offset-dark/surface-primary focus:ring-brand"
          {...(sendingFeedback
            ? {
                'aria-label': 'Enviando feedback',
                'aria-live': 'polite',
                'aria-busy': true
              }
            : {
                'aria-live': 'polite',
                'aria-busy': false
              })}
        >
          {sendingFeedback ? (
            <CircleNotch className="w-6 h-6 animate-spin" />
          ) : (
            <span className="text-[0.875rem] leading-[1.5rem] font-medium">
              Enviar feedback
            </span>
          )}
        </button>
      </footer>
    </form>
  )
}

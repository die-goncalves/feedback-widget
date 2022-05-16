import { CircleNotch } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
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

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    setSendingFeedback(true)
    console.log(textareaChange, screenshot)
    setSendingFeedback(false)

    setFeedbackSent(true)
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextareaChange(event.target.value)
  }

  return (
    <form onSubmit={handleSubmitFeedback} className="flex flex-col my-4 gap-2">
      <textarea
        style={{
          scrollbarGutter: 'stable'
        }}
        onChange={handleTextareaChange}
        className="text-dark/text-primary caret-brand transition-[box-shadow] duration-300 ease-out scrollbar scroll-smooth scroll-pb-4 cursor-auto pl-3 py-2 text-[0.875rem] w-[19rem] h-28 border-[0.0625rem] border-dark/stroke rounded-[0.25rem] bg-dark/surface-primary placeholder:text-dark/text-secondary placeholder:text-[0.875rem] focus:outline-none focus:border-brand focus:ring-[0.0625rem] ring-brand resize-none"
        placeholder={placeholder(feedbackType)}
      />

      <footer className="flex">
        <ScreenshotButton
          screenshot={screenshot}
          onScreenshotTook={setScreenshot}
        />
        <button
          type="submit"
          disabled={!textareaChange || sendingFeedback}
          aria-disabled={!textareaChange || sendingFeedback}
          className="flex flex-1 ml-2 justify-center items-center rounded-[0.25rem] text-dark/text-primary bg-brand hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-brand disabled:opacity-50 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark/surface-primary focus:ring-brand"
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
            'Enviar feedback'
          )}
        </button>
      </footer>
    </form>
  )
}

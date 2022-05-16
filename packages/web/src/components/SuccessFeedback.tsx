import Success from '../assets/Success.svg'

type SuccessFeedbackProps = {
  restartFeedback: () => void
}

export function SuccessFeedback({ restartFeedback }: SuccessFeedbackProps) {
  return (
    <div className="flex flex-col mt-auto mb-10">
      <div className="flex flex-col gap-2">
        <img src={Success} alt="Sucesso" className="w-10 mx-auto" />
        <h1 className="text-[1.25rem] leading-[1.5rem] font-medium text-dark/text-primary">
          Agradecemos o feedback
        </h1>
      </div>

      <button
        autoFocus
        onClick={restartFeedback}
        className="mt-6 mx-auto px-6 py-2 rounded-[0.25rem] bg-dark/surface-secondary text-[0.875rem] leading-[1.5rem] font-medium text-dark/text-primary hover:bg-dark/surface-secondary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark/surface-primary focus:ring-brand transition-all duration-300 ease-out"
      >
        Quero enviar outro
      </button>
    </div>
  )
}

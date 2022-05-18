import { ArrowLeft } from 'phosphor-react'

type BackButtonProps = {
  restartFeedback: () => void
}

export function BackButton({ restartFeedback }: BackButtonProps) {
  return (
    <button
      onClick={restartFeedback}
      className="bg-transparent absolute top-4 left-4 p-[0.25rem] rounded-[0.125rem] group transition-all duration-300 outline-none focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand"
      aria-label="Voltar para a escolher novo tipo feedback"
    >
      <ArrowLeft
        className="w-4 h-4 transition-all duration-250 text-light/text-secondary dark:text-dark/text-secondary group-hover:text-light/text-primary dark:group-hover:text-dark/text-primary"
        weight="bold"
      />
    </button>
  )
}

import { ArrowLeft } from 'phosphor-react'

type BackButtonProps = {
  restartFeedback: () => void
}

export function BackButton({ restartFeedback }: BackButtonProps) {
  return (
    <button
      onClick={restartFeedback}
      className="bg-dark/surface-primary absolute top-4 left-4 p-[0.25rem] rounded-[0.125rem] group transition-[box-shadow] duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark/surface-primary focus:ring-brand"
      aria-label="Voltar para a escolher novo tipo feedback"
    >
      <ArrowLeft
        className="w-4 h-4 transition-all duration-250 text-dark/text-secondary group-hover:text-dark/text-primary"
        weight="bold"
      />
    </button>
  )
}

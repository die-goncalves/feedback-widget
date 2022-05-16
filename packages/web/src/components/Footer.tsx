import { HeartStraight } from 'phosphor-react'

export function Footer() {
  return (
    <footer>
      <p className="text-[0.75rem] leading-[1rem] font-medium items-center text-dark/text-secondary">
        Feito com{' '}
        <HeartStraight className="inline align-[-0.1rem] w-4" weight="fill" />{' '}
        pela{' '}
        <a
          className="underline underline-offset-1 hover:text-brand-hover hover:decoration-dark/text-secondary focus:outline-none focus:text-brand-hover focus:decoration-dark/text-secondary transition-all duration-300 ease-out"
          href="https://www.rocketseat.com.br/"
        >
          Rocketseat
        </a>
      </p>
    </footer>
  )
}

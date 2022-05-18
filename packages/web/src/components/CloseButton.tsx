import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton() {
  return (
    <Popover.Button
      className="absolute top-4 right-4 bg-transparent p-[0.25rem] rounded-[0.125rem] group transition-all duration-300 outline-none focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand"
      aria-label="Fechar"
    >
      <X
        className="w-4 h-4 transition-all duration-300 text-light/text-secondary dark:text-dark/text-secondary group-hover:text-light/text-primary dark:group-hover:text-dark/text-primary"
        weight="bold"
      />
    </Popover.Button>
  )
}

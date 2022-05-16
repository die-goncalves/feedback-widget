import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton() {
  return (
    <Popover.Button
      className="absolute top-4 right-4 bg-dark/surface-primary p-[0.25rem] rounded-[0.125rem] group transition-[box-shadow] duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark/surface-primary focus:ring-brand"
      aria-label="Fechar"
    >
      <X
        className="w-4 h-4 transition-all duration-300 text-dark/text-secondary group-hover:text-dark/text-primary"
        weight="bold"
      />
    </Popover.Button>
  )
}

import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end gap-2">
      {({ open }) => (
        <>
          <div className="flex rounded-full justify-end cursor-pointer bg-transparent w-[8.1875rem] h-12 group">
            <Popover.Button
              title="Widget de feedback"
              className={`flex p-3 w-12 h-12 bg-brand hover:bg-brand-hover rounded-full group-hover:w-[8.1875rem] drop-shadow-[0_0.5rem_1.5rem_rgba(130,87,229,0.25)]  border-none transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark/surface-primary ring-brand ${
                open && 'bg-brand-hover'
              }`}
            >
              <ChatTeardropDots
                className="w-6 h-6"
                weight="bold"
                color="#ffffff"
              />

              <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 ease-out">
                <span className="pl-2 text-white font-medium">Feedback</span>
              </span>
            </Popover.Button>
          </div>
        </>
      )}
    </Popover>
  )
}

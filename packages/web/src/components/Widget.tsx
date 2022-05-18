import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetContent } from './WidgetContent'

export function Widget() {
  return (
    <div className="fixed bottom-4 right-4 ">
      <Popover className="flex flex-col items-end gap-2">
        {({ open }) => (
          <>
            <Popover.Panel className="w-[21rem] h-[16.5rem] bg-light/surface-primary dark:bg-dark/surface-primary p-4 rounded-[1rem] relative flex flex-col items-center shadow-lg ring-1 ring-black ring-opacity-5">
              <WidgetContent />
            </Popover.Panel>

            <div className="flex rounded-full justify-end cursor-pointer bg-transparent w-[8.1875rem] h-12 group">
              <Popover.Button
                aria-label="Feedback"
                className={`flex p-3 w-12 h-12 bg-brand hover:bg-brand-hover rounded-full group-hover:w-[8.1875rem] drop-shadow-[0_0.5rem_1.5rem_rgba(130,87,229,0.25)] border-none transition-all duration-300 ease-out outline-none focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand ${
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
    </div>
  )
}

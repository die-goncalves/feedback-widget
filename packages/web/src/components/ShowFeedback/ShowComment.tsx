import { CaretDown } from 'phosphor-react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type ShowCommentProps = {
  comment: string
}

export function ShowComment({ comment }: ShowCommentProps) {
  return (
    <div className="absolute top-4 right-4 z-10">
      <Popover className="flex flex-col items-end gap-2">
        {({ open }) => (
          <>
            <Popover.Button
              aria-label="Comentário"
              className={`flex items-center p-2 h-12 bg-brand hover:bg-brand-hover rounded-[0.25rem] border-none transition-all duration-300 ease-out outline-none focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand ${
                open
                  ? 'bg-brand-hover'
                  : 'drop-shadow-[0_0.5rem_1.5rem_rgba(130,87,229,0.25)]'
              }`}
            >
              <span className="text-[0.875rem] leading-[1.5rem] text-text-on-brand-color font-medium">
                Comentário
              </span>
              <CaretDown
                className={`w-4 h-4 ml-2 text-text-on-brand-color transition-all duration-300 ease-out ${
                  open && '-rotate-180'
                } `}
                weight="bold"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="flex relative pl-[1rem] py-[1rem] bg-brand rounded-[0.25rem] ring-2 ring-brand ring-opacity-5 drop-shadow-[0_0.5rem_12px_rgba(130,87,229,0.25)]">
                <div
                  style={{
                    scrollbarGutter: 'stable'
                  }}
                  className="w-[21rem] max-h-[16.5rem] pr-[0.15rem] overflow-auto text-justify scrollbar-comment"
                >
                  <p className="text-[0.875rem] leading-[1.5rem] text-text-on-brand-color font-regular">
                    {comment}
                  </p>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

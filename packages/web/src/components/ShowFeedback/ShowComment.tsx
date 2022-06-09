import { CaretDown } from 'phosphor-react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type ShowCommentProps = {
  comment: string
}

export function ShowComment({ comment }: ShowCommentProps) {
  return (
    <Popover className="relative flex-col items-end gap-2">
      {({ open }) => (
        <>
          <Popover.Button
            aria-label="Comentário"
            className={`flex h-full border-b-2 border-transparent items-center justify-center text-brand hover:text-brand-hover transition-all duration-300 ease-out outline-none focus:border-brand`}
          >
            <span className="text-[0.875rem] leading-[1.5rem] font-medium">
              Comentário
            </span>
            <CaretDown
              className={`w-4 h-4 ml-2 transition-all duration-300 ease-out ${
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
            <Popover.Panel className="flex absolute top-14 right-0 z-10 pl-[1rem] py-[1rem] bg-brand rounded-[0.25rem] ring-2 ring-brand ring-opacity-5 drop-shadow-[0_0.5rem_12px_rgba(130,87,229,0.25)]">
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
  )
}

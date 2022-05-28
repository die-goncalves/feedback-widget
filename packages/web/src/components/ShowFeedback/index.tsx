import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShowComment } from './ShowComment'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import {
  Eraser,
  Image,
  MagnifyingGlassMinus,
  MagnifyingGlassPlus
} from 'phosphor-react'
import { UpdateFeedback } from './UpdateFeedback'

type Feedback = {
  id: string
  type: string
  comment: string
  screenshot?: string
  createdAt: string
  updatedAt?: string
  checked: boolean
}

type ShowFeedbackProps = {
  feedback: Feedback
  setListFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>
}

export function ShowFeedback({ feedback, setListFeedback }: ShowFeedbackProps) {
  const [isOpenShowFeedback, setIsOpenShowFeedback] = useState(false)

  return (
    <>
      <button
        className="flex h-32 rounded-[0.5rem] overflow-hidden bg-light/surface-secondary dark:bg-dark/surface-primary ring-2 ring-white ring-opacity-5 border-2 border-transparent outline-none focus:border-brand transition-all duration-300 ease-out hover:-translate-y-1 drop-shadow-none hover:drop-shadow-[0_0.25rem_0rem_rgba(130,87,229)]"
        onClick={() => setIsOpenShowFeedback(true)}
      >
        <div className="flex w-32 h-full rounded-r-[0.25rem] overflow-hidden">
          {feedback.screenshot ? (
            <img
              className="w-full h-full object-cover"
              src={feedback.screenshot}
              alt={feedback.comment}
            />
          ) : (
            <div className="flex w-full h-full bg-light/stroke dark:bg-dark/stroke">
              <Image
                className="w-1/2 h-1/2 m-auto text-light/text-primary dark:text-dark/text-primary"
                weight="thin"
              />
            </div>
          )}
        </div>
        <p className="flex-1 m-4 text-justify line-clamp-4 text-[0.875rem] leading-[1.5rem] font-regular text-light/text-primary dark:text-dark/text-primary">
          {feedback.comment}
        </p>
      </button>

      <Transition appear show={isOpenShowFeedback} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpenShowFeedback(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="flex fixed inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex relative m-auto overflow-hidden rounded-[0.5rem] bg-light/surface-primary dark:bg-dark/surface-primary shadow-xl ring-2 ring-black ring-opacity-5">
                <TransformWrapper>
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      {feedback.screenshot && (
                        <div className="flex absolute top-4 left-[calc(50%-5.5rem)] z-10 gap-4">
                          <button
                            aria-label="Ampliar visualização da imagem"
                            className="p-3 rounded-[0.25rem] bg-brand hover:bg-brand-hover transition-all duration-300 ease-out border-none outline-none focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand"
                            onClick={() => zoomIn(0.5)}
                          >
                            <MagnifyingGlassPlus
                              className="w-6 h-6 text-text-on-brand-color"
                              weight="bold"
                            />
                          </button>
                          <button
                            aria-label="Resetar zoom da imagem"
                            className="p-3 rounded-[0.25rem] bg-brand hover:bg-brand-hover transition-all duration-300 ease-out border-none outline-none focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand"
                            onClick={() => resetTransform()}
                          >
                            <Eraser
                              className="w-6 h-6 text-text-on-brand-color"
                              weight="bold"
                            />
                          </button>
                          <button
                            aria-label="Reduzir visualização da imagem"
                            className="p-3 rounded-[0.25rem] bg-brand hover:bg-brand-hover transition-all duration-300 ease-out border-none outline-none focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand"
                            onClick={() => zoomOut(0.5)}
                          >
                            <MagnifyingGlassMinus
                              className="w-6 h-6 text-text-on-brand-color"
                              weight="bold"
                            />
                          </button>
                        </div>
                      )}
                      <ShowComment comment={feedback.comment} />
                      <UpdateFeedback
                        id={feedback.id}
                        setListFeedback={setListFeedback}
                      />

                      <TransformComponent
                        wrapperStyle={{
                          maxWidth: '75vw',
                          maxHeight: '75vh'
                        }}
                      >
                        {feedback.screenshot ? (
                          <img
                            src={feedback.screenshot}
                            alt={feedback.comment}
                          />
                        ) : (
                          <div className="w-[24rem] h-[24rem]" />
                        )}
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

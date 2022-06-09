import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShowComment } from './ShowComment'
import {
  Image,
  ArrowClockwise,
  Minus,
  Plus,
  ArrowDown,
  ArrowUp,
  ArrowRight,
  ArrowLeft
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

type Controls = {
  x: number
  y: number
  zoom: number
}

export function ShowFeedback({ feedback, setListFeedback }: ShowFeedbackProps) {
  const [isOpenShowFeedback, setIsOpenShowFeedback] = useState(false)
  const [controls, setControls] = useState<Controls>({
    x: 0,
    y: 0,
    zoom: 1
  })
  const imageControls = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageControls.current) {
      imageControls.current.style.cssText = `
        ${imageControls.current.style.cssText};
        transform: translate(${controls.x}px, ${controls.y}px) scale(${controls.zoom})
      `
    }
  }, [controls])

  const onLeft = () => {
    setControls(prevState => ({ ...prevState, x: prevState.x - 50 }))
  }
  const onRight = () => {
    setControls(prevState => ({ ...prevState, x: prevState.x + 50 }))
  }
  const onUp = () => {
    setControls(prevState => ({ ...prevState, y: prevState.y - 50 }))
  }
  const onDown = () => {
    setControls(prevState => ({ ...prevState, y: prevState.y + 50 }))
  }
  const onZoomIn = () => {
    setControls(prevState => ({ ...prevState, zoom: prevState.zoom + 0.05 }))
  }
  const onZoomOut = () => {
    setControls(prevState => ({ ...prevState, zoom: prevState.zoom - 0.05 }))
  }
  const onReset = () => {
    setControls(prevState => ({ ...prevState, x: 0, y: 0, zoom: 1 }))
  }

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
                <>
                  {feedback.screenshot ? (
                    <div className="flex">
                      <div className="flex flex-col pt-10 z-10 gap-2 bg-brand">
                        <button
                          type="button"
                          aria-label="Resetar posição"
                          onClick={onReset}
                          className="flex p-2 bg-brand hover:bg-brand-hover border-l-2 border-brand hover:border-brand-hover transition-all duration-300 ease-out outline-none focus:border-text-on-brand-color"
                        >
                          <ArrowClockwise
                            className="w-6 h-6 m-auto text-text-on-brand-color"
                            weight="bold"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label="Ampliar zoom"
                          onClick={onZoomIn}
                          className="flex p-2 bg-brand hover:bg-brand-hover border-l-2 border-brand hover:border-brand-hover transition-all duration-300 ease-out outline-none focus:border-text-on-brand-color"
                        >
                          <Plus
                            className="w-6 h-6 m-auto text-text-on-brand-color"
                            weight="bold"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label="Reduzir zoom"
                          onClick={onZoomOut}
                          className="flex p-2 bg-brand hover:bg-brand-hover border-l-2 border-brand hover:border-brand-hover transition-all duration-300 ease-out outline-none focus:border-text-on-brand-color"
                        >
                          <Minus
                            className="w-6 h-6 m-auto text-text-on-brand-color"
                            weight="bold"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label="Mover imagem para cima"
                          onClick={onUp}
                          className="flex p-2 bg-brand hover:bg-brand-hover border-l-2 border-brand hover:border-brand-hover transition-all duration-300 ease-out outline-none focus:border-text-on-brand-color"
                        >
                          <ArrowUp
                            className="w-6 h-6 m-auto text-text-on-brand-color"
                            weight="bold"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label="Mover imagem para baixo"
                          onClick={onDown}
                          className="flex p-2 bg-brand hover:bg-brand-hover border-l-2 border-brand hover:border-brand-hover transition-all duration-300 ease-out outline-none focus:border-text-on-brand-color"
                        >
                          <ArrowDown
                            className="w-6 h-6 m-auto text-text-on-brand-color"
                            weight="bold"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label="Mover imagem para esquerda"
                          onClick={onLeft}
                          className="flex p-2 bg-brand hover:bg-brand-hover border-l-2 border-brand hover:border-brand-hover transition-all duration-300 ease-out outline-none focus:border-text-on-brand-color"
                        >
                          <ArrowLeft
                            className="w-6 h-6 m-auto text-text-on-brand-color"
                            weight="bold"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label="Mover imagem para direita"
                          onClick={onRight}
                          className="flex p-2 bg-brand hover:bg-brand-hover border-l-2 border-brand hover:border-brand-hover transition-all duration-300 ease-out outline-none focus:border-text-on-brand-color"
                        >
                          <ArrowRight
                            className="w-6 h-6 m-auto text-text-on-brand-color"
                            weight="bold"
                          />
                        </button>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex bg-light/surface-secondary dark:bg-dark/surface-secondary z-10 px-4 h-10 justify-between shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.1)]">
                          <UpdateFeedback
                            id={feedback.id}
                            setListFeedback={setListFeedback}
                          />
                          {feedback.checked ? (
                            <span className="bg-green-300 flex h-fit p-1 rounded-b-[0.25rem] text-[0.75rem] leading-[0.75rem]">
                              visto
                            </span>
                          ) : (
                            <span className="bg-red-300 flex h-fit p-1 rounded-b-[0.25rem] text-[0.75rem] leading-[0.75rem]">
                              pendente
                            </span>
                          )}

                          <ShowComment comment={feedback.comment} />
                        </div>
                        <img
                          style={{
                            maxWidth: '75vw',
                            maxHeight: '75vh'
                          }}
                          ref={imageControls}
                          src={feedback.screenshot}
                          alt={feedback.comment}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-[24rem] h-[24rem]">
                      <div className="flex w-full px-4 h-10 bg-light/surface-secondary dark:bg-dark/surface-secondary justify-between shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.1)]">
                        <UpdateFeedback
                          id={feedback.id}
                          setListFeedback={setListFeedback}
                        />
                        {feedback.checked ? (
                          <span className="bg-green-300 flex h-fit p-1 rounded-b-[0.25rem] text-[0.75rem] leading-[0.75rem]">
                            visto
                          </span>
                        ) : (
                          <span className="bg-red-300 flex h-fit p-1 rounded-b-[0.25rem] text-[0.75rem] leading-[0.75rem]">
                            pendente
                          </span>
                        )}

                        <ShowComment comment={feedback.comment} />
                      </div>
                    </div>
                  )}
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

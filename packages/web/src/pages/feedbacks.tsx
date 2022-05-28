import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { HeaderForPages } from '../components/HeaderForPages'
import { ShowFeedback } from '../components/ShowFeedback'
import { api } from '../lib/api'

type Feedback = {
  id: string
  type: string
  comment: string
  screenshot?: string
  createdAt: string
  updatedAt?: string
  checked: boolean
}

type HandleFeedbacksProps = {
  type: any
  checked: boolean
}

export const Feedbacks = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [whichFeedback, setWhichFeedback] = useState<{
    type: string
    checked: boolean
  }>()
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback[]>([])
  const [listFeedbacks, setListFeedbacks] = useState<Feedback[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const accessToken = await getAccessTokenSilently()
        const { data: response } = await api.get('/feedbacks', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })

        setListFeedbacks(response.data)
      } catch (error) {
        console.log({ error })
      }
    })()
  }, [])

  useEffect(() => {
    ;(function (type: string | undefined, checked: boolean | undefined) {
      const data = listFeedbacks.filter(
        feedback => feedback.type === type && feedback.checked === checked
      )
      setSelectedFeedback(data)
    })(whichFeedback?.type, whichFeedback?.checked)
  }, [listFeedbacks, whichFeedback])

  function thisFeedback({ type, checked }: HandleFeedbacksProps) {
    setWhichFeedback({ type, checked })
  }

  function pendentFeedback(type: string) {
    const result = listFeedbacks.some(
      feedback => feedback.type === type && !feedback.checked
    )
    return result
  }

  return (
    <div
      style={{
        overflow: 'auto',
        scrollbarGutter: 'stable'
      }}
      className="bg-light/background dark:bg-dark/background scrollbar-app light-scrollbar-thumb-app dark:dark-scrollbar-thumb-app light-scrollbar-track-app dark:dark-scrollbar-track-app max-w-screen max-h-screen"
    >
      <div className="min-w-screen min-h-screen">
        <HeaderForPages />

        <div className="mx-40 mt-8 bg-light/background dark:bg-dark/background max-w-screen max-h-screen">
          <div className="flex gap-8 items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-light/surface-secondary dark:bg-dark/surface-secondary border-2 border-transparent p-2 rounded-[0.25rem]  text-light/text-primary dark:text-dark/text-primary">
              <span className="text-[1rem] leading-[1.5rem] font-medium">
                Problemas
              </span>

              <div className="flex mt-2 gap-2">
                <button
                  onClick={() =>
                    thisFeedback({
                      type: 'BUG',
                      checked: true
                    })
                  }
                  className="bg-light/surface-primary dark:bg-dark/surface-primary p-2 border-2 border-transparent outline-none focus:border-brand hover:border-brand rounded-[0.25rem] transition-all duration-300 ease-out"
                >
                  <span className="text-[0.875rem] leading-[1.5rem] font-regular">
                    Visto
                  </span>
                </button>
                <button
                  onClick={() =>
                    thisFeedback({
                      type: 'BUG',
                      checked: false
                    })
                  }
                  className="relative bg-light/surface-primary dark:bg-dark/surface-primary p-2 border-2 border-transparent outline-none focus:border-brand hover:border-brand rounded-[0.25rem] transition-all duration-300 ease-out"
                >
                  <span className="text-[0.875rem] leading-[1.5rem] font-regular">
                    Pendente
                  </span>
                  {pendentFeedback('BUG') && (
                    <span className="absolute top-0.5 right-0.5">
                      <span className="animate-ping absolute block bg-brand w-2 h-2 rounded-full opacity-50" />
                      <span className="relative block bg-brand w-2 h-2 rounded-full" />
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-light/surface-secondary dark:bg-dark/surface-secondary border-2 border-transparent p-2 rounded-[0.25rem]  text-light/text-primary dark:text-dark/text-primary">
              <span className="text-[1rem] leading-[1.5rem] font-medium">
                Ideias
              </span>

              <div className="flex mt-2 gap-2">
                <button
                  onClick={() =>
                    thisFeedback({
                      type: 'IDEA',
                      checked: true
                    })
                  }
                  className="bg-light/surface-primary dark:bg-dark/surface-primary p-2 border-2 border-transparent outline-none focus:border-brand hover:border-brand rounded-[0.25rem] transition-all duration-300 ease-out"
                >
                  <span className="text-[0.875rem] leading-[1.5rem] font-regular">
                    Visto
                  </span>
                </button>
                <button
                  onClick={() =>
                    thisFeedback({
                      type: 'IDEA',
                      checked: false
                    })
                  }
                  className="relative bg-light/surface-primary dark:bg-dark/surface-primary p-2 border-2 border-transparent outline-none focus:border-brand hover:border-brand rounded-[0.25rem] transition-all duration-300 ease-out"
                >
                  <span className="text-[0.875rem] leading-[1.5rem] font-regular">
                    Pendente
                  </span>
                  {pendentFeedback('IDEA') && (
                    <span className="absolute top-0.5 right-0.5">
                      <span className="animate-ping absolute block bg-brand w-2 h-2 rounded-full opacity-50" />
                      <span className="relative block bg-brand w-2 h-2 rounded-full" />
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-light/surface-secondary dark:bg-dark/surface-secondary border-2 border-transparent p-2 rounded-[0.25rem]  text-light/text-primary dark:text-dark/text-primary">
              <span className="text-[1rem] leading-[1.5rem] font-medium">
                Outros
              </span>

              <div className="flex mt-2 gap-2">
                <button
                  onClick={() =>
                    thisFeedback({
                      type: 'OTHER',
                      checked: true
                    })
                  }
                  className="bg-light/surface-primary dark:bg-dark/surface-primary p-2 border-2 border-transparent outline-none focus:border-brand hover:border-brand rounded-[0.25rem] transition-all duration-300 ease-out"
                >
                  <span className="text-[0.875rem] leading-[1.5rem] font-regular">
                    Visto
                  </span>
                </button>
                <button
                  onClick={() =>
                    thisFeedback({
                      type: 'OTHER',
                      checked: false
                    })
                  }
                  className="relative bg-light/surface-primary dark:bg-dark/surface-primary p-2 border-2 border-transparent outline-none focus:border-brand hover:border-brand rounded-[0.25rem] transition-all duration-300 ease-out"
                >
                  <span className="text-[0.875rem] leading-[1.5rem] font-regular">
                    Pendente
                  </span>
                  {pendentFeedback('OTHER') && (
                    <span className="absolute top-0.5 right-0.5">
                      <span className="animate-ping absolute block bg-brand w-2 h-2 rounded-full opacity-50" />
                      <span className="relative block bg-brand w-2 h-2 rounded-full" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-8 mt-8">
            {selectedFeedback.map(feedback => (
              <ShowFeedback
                key={`selected-feedback-${feedback.id}`}
                feedback={feedback}
                setListFeedback={setListFeedbacks}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

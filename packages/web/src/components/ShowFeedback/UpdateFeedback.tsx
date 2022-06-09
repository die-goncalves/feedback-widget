import { useAuth0 } from '@auth0/auth0-react'
import { Switch } from '@headlessui/react'
import { Check, CircleNotch, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../../lib/api'

type Feedback = {
  id: string
  type: string
  comment: string
  screenshot?: string
  createdAt: string
  updatedAt?: string
  checked: boolean
}

type UpdateFeedbackProps = {
  id: string
  setListFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>
}

export function UpdateFeedback({ id, setListFeedback }: UpdateFeedbackProps) {
  const { getAccessTokenSilently } = useAuth0()
  const [loading, setLoading] = useState<boolean>(false)
  const [specificFeedback, setSpecificFeedback] = useState<Feedback>()

  useEffect(() => {
    ;(async (id: string) => {
      const accessToken = await getAccessTokenSilently()
      const { data: response } = await api.get(`/feedback?id=${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      setSpecificFeedback(response.data)
    })(id)
  }, [])

  async function updateFeedback(id: string | undefined) {
    if (id) {
      setLoading(true)
      const accessToken = await getAccessTokenSilently()
      const { data: response } = await api.put(
        '/update/feedback',
        { id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      setListFeedback(prevState =>
        prevState.map(feedback => {
          if (feedback.id === id) {
            feedback = response.data
          }
          return feedback
        })
      )
      setSpecificFeedback(response.data)
      setLoading(false)
    }
  }

  return (
    <>
      <button
        disabled={loading}
        aria-label={
          specificFeedback?.checked ? 'Revisar feedback' : 'Checar Feedback'
        }
        onClick={async () => await updateFeedback(specificFeedback?.id)}
        className={`flex justify-center items-center text-brand hover:text-brand-hover border-b-2 border-transparent outline-none ${
          loading
            ? 'px-[2.75rem] cursor-not-allowed'
            : 'transition-all duration-300 ease-out focus:border-brand'
        }`}
      >
        {loading ? (
          <CircleNotch className="w-6 h-6 animate-spin" />
        ) : specificFeedback?.checked ? (
          <span className="text-[0.875rem] leading-[1.5rem] font-medium">
            Revisar feedback?
          </span>
        ) : (
          <span className="text-[0.875rem] leading-[1.5rem] font-medium">
            Feedback visto?
          </span>
        )}
      </button>
    </>
  )
}

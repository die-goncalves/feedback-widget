import { useAuth0 } from '@auth0/auth0-react'
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
    <div className="absolute top-4 left-4 z-10">
      <button
        aria-label={
          specificFeedback?.checked ? 'Revisar feedback' : 'Checar Feedback'
        }
        onClick={async () => await updateFeedback(specificFeedback?.id)}
        className={`flex p-3 rounded-full border-none transition-all duration-300 ease-out outline-none focus:outline-offset-2 focus:outline focus:outline-2 ${
          specificFeedback?.checked
            ? 'bg-red-500 focus:outline-red-300'
            : 'bg-green-500 focus:outline-green-300'
        }`}
      >
        {loading ? (
          <CircleNotch className="w-6 h-6 text-text-on-brand-color animate-spin" />
        ) : specificFeedback?.checked ? (
          <X
            className={`w-6 h-6 text-text-on-brand-color transition-all duration-300 ease-out`}
            weight="bold"
          />
        ) : (
          <Check
            className={`w-6 h-6 text-text-on-brand-color transition-all duration-300 ease-out`}
            weight="bold"
          />
        )}
      </button>
    </div>
  )
}

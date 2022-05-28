import { CircleNotch } from 'phosphor-react'

export function Loading() {
  return (
    <div className="flex w-screen h-screen bg-light/background dark:bg-dark/background">
      <CircleNotch
        className="m-auto w-16 h-16 animate-spin text-brand"
        weight="thin"
      />
    </div>
  )
}

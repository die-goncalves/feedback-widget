import html2canvas from 'html2canvas'
import { Camera, CircleNotch, Trash } from 'phosphor-react'
import { useState } from 'react'

type ScreenshotButtonProps = {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook('')}
        style={{
          backgroundImage: `url(${screenshot})`
        }}
        className="flex items-end justify-end w-10 h-10 rounded-[0.25rem] text-light/text-secondary dark:text-dark/text-secondary hover:text-light/text-primary dark:hover:text-dark/text-primary bg-transparent transition-all duration-300 ease-out border-[0.0625rem] border-light/stroke dark:border-dark/stroke focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light/surface-primary dark:focus:ring-offset-dark/surface-primary focus:ring-brand"
        aria-label="Excluir foto"
      >
        <Trash className="w-4 h-4" weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="flex items-center justify-center w-10 h-10 rounded-[0.25rem] text-light/text-primary dark:text-dark/text-primary bg-light/surface-secondary dark:bg-dark/surface-secondary hover:bg-light/surface-secondary-hover dark:hover:bg-dark/surface-secondary-hover transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-light/surface-secondary dark:hover:disabled:bg-dark/surface-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light/surface-primary dark:focus:ring-offset-dark/surface-primary focus:ring-brand"
      {...(isTakingScreenshot
        ? {
            disabled: true,
            'aria-disabled': true,
            'aria-label': 'Tirando foto da tela',
            'aria-live': 'polite',
            'aria-busy': true
          }
        : {
            'aria-label': 'Tirar foto da tela',
            'aria-live': 'polite',
            'aria-busy': false
          })}
    >
      {isTakingScreenshot ? (
        <CircleNotch className="w-6 h-6 animate-spin" />
      ) : (
        <Camera className="w-6 h-6" />
      )}
    </button>
  )
}

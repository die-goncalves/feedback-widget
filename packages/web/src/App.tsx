import { ThemeChangeButton } from './components/ThemeChangeButton'
import { Widget } from './components/Widget'

function App() {
  return (
    <div
      style={{
        overflow: 'auto',
        scrollbarGutter: 'stable'
      }}
      className="bg-light/background dark:bg-dark/background scrollbar-app light-scrollbar-thumb-app dark:dark-scrollbar-thumb-app light-scrollbar-track-app dark:dark-scrollbar-track-app max-w-screen max-h-screen"
    >
      <div className="min-w-screen min-h-screen">
        <header className="flex justify-between items-center h-[4.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary px-[10rem]">
          <div className="w-[10rem] h-10 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
          <div className="flex gap-6">
            <div className="w-[6.25rem] h-4 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
            <div className="w-[6.25rem] h-4 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
            <div className="w-[6.25rem] h-4 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
            <div className="w-[6.25rem] h-4 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeChangeButton />
            <div className="w-8 h-8 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
            <div className="w-8 h-8 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
            <div className="w-12 h-12 rounded-full bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
          </div>
        </header>

        <main className="flex flex-col mx-[10rem] mt-12">
          <header className="flex flex-1 px-14 py-12 rounded-[0.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary">
            <h1 className="text-4 font-normal text-light/text-secondary dark:text-dark/text-secondary">
              Experimente enviar um feedback de um bug na aplicação 🐛
            </h1>
          </header>
          <div className="grid grid-cols-3 auto-rows-auto mt-8 gap-8">
            <div className="w-full h-[19.375rem] rounded-[0.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary"></div>
            <div className="w-full h-[19.375rem] rounded-[0.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary"></div>
            <div className="w-full h-[19.375rem] rounded-[0.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary"></div>
            <div className="w-full h-[19.375rem] rounded-[0.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary"></div>
            <div className="w-full h-[19.375rem] rounded-[0.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary"></div>
          </div>
        </main>
      </div>

      <Widget />
    </div>
  )
}

export default App

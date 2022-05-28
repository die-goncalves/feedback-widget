import { HeaderForPages } from '../components/HeaderForPages'
import { Widget } from '../components/Widget'

export function Home() {
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

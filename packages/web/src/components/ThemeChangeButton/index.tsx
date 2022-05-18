import { Menu, Transition } from '@headlessui/react'
import { MoonStars, Sun, Airplay } from 'phosphor-react'
import { Fragment, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

enum AvailableThemes {
  light = 'light',
  dark = 'dark',
  system = 'system'
}
type AvailableThemesStrings = keyof typeof AvailableThemes

export function ThemeChangeButton() {
  const [mode, setMode] = useState<AvailableThemesStrings>(() => {
    const cookie = Cookies.get('FeedGet')
    return cookie && (JSON.parse(cookie).theme ?? AvailableThemes.system)
  })

  function removeThemeOnCookie(cookie: string | undefined) {
    const hasTheme = cookie && JSON.parse(cookie).theme
    if (cookie && hasTheme) {
      const { theme, ...rest } = JSON.parse(cookie)
      Cookies.set('FeedGet', JSON.stringify(rest))
    }
  }

  function addThemeOnCookie(
    cookie: string | undefined,
    theme: AvailableThemesStrings
  ) {
    const parseCookie = cookie && JSON.parse(cookie)

    switch (theme) {
      case 'light':
        Cookies.set(
          'FeedGet',
          JSON.stringify({ ...parseCookie, theme: 'light' })
        )
        setMode(theme)
        document.documentElement.classList.remove('dark')
        break
      case 'dark':
        Cookies.set(
          'FeedGet',
          JSON.stringify({ ...parseCookie, theme: 'dark' })
        )
        setMode(theme)
        document.documentElement.classList.add('dark')
        break
      default:
        // eslint-disable-next-line no-case-declarations
        const darkModeMediaQuery = window.matchMedia(
          '(prefers-color-scheme: dark)'
        )
        removeThemeOnCookie(Cookies.get('FeedGet'))
        setMode(theme)
        if (darkModeMediaQuery.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        break
    }
  }

  useEffect(() => {
    const cookie = Cookies.get('FeedGet')

    const parseCookie = cookie && JSON.parse(cookie).theme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (parseCookie) {
      if (parseCookie === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      if (darkModeMediaQuery.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    function darkMode(e: MediaQueryListEvent) {
      const darkModeOn = e.matches

      const cookie = Cookies.get('FeedGet')
      const parseCookie = cookie && JSON.parse(cookie).theme

      if (!parseCookie) {
        if (darkModeOn) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
    darkModeMediaQuery.addEventListener('change', darkMode)

    return () => {
      darkModeMediaQuery.removeEventListener('change', darkMode)
    }
  }, [])

  function setIconByMode() {
    switch (mode) {
      case 'light':
        return (
          <Sun className="m-auto w-6 h-6 text-brand group-hover:text-brand-hover transition-[color] duration-300 ease-out" />
        )
      case 'dark':
        return (
          <MoonStars className="m-auto w-6 h-6 text-brand group-hover:text-brand-hover transition-[color] duration-300 ease-out" />
        )
      default:
        return (
          <Airplay className="m-auto w-6 h-6 text-brand group-hover:text-brand-hover transition-[color] duration-300 ease-out" />
        )
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="flex w-8 h-8 group bg-light/surface-secondary dark:bg-dark/surface-secondary rounded-[0.25rem] border-none outline-none transition-all duration-300 ease-out focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-brand"
        aria-label="Selecionar tema"
        aria-live="polite"
      >
        {setIconByMode}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-[0.25rem] bg-light/surface-primary dark:bg-dark/surface-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-0.5">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() =>
                    addThemeOnCookie(
                      Cookies.get('FeedGet'),
                      AvailableThemes.light
                    )
                  }
                  className={`${
                    active && 'bg-brand text-text-on-brand-color'
                  } flex w-full items-center rounded-[0.25rem] px-2 py-2 text-[0.875rem] leading-[1.5rem] ${
                    mode === AvailableThemes.light && !active
                      ? 'text-brand font-medium'
                      : 'text-light/text-primary dark:text-dark/text-primary font-regular'
                  }`}
                  aria-label="Tema claro"
                  aria-checked={mode === AvailableThemes.light}
                  aria-selected={mode === AvailableThemes.light}
                >
                  <Sun className="w-6 h-6 mr-2" /> Claro
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() =>
                    addThemeOnCookie(
                      Cookies.get('FeedGet'),
                      AvailableThemes.dark
                    )
                  }
                  className={`${
                    active && 'bg-brand text-text-on-brand-color'
                  } flex w-full items-center rounded-[0.25rem] px-2 py-2 text-[0.875rem] leading-[1.5rem] ${
                    mode === AvailableThemes.dark && !active
                      ? 'text-brand font-medium'
                      : 'text-light/text-primary dark:text-dark/text-primary font-regular'
                  }`}
                  aria-label="Tema escuro"
                >
                  <MoonStars className="w-6 h-6 mr-2" /> Escuro
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() =>
                    addThemeOnCookie(
                      Cookies.get('FeedGet'),
                      AvailableThemes.system
                    )
                  }
                  className={`${
                    active && 'bg-brand text-text-on-brand-color'
                  } flex w-full items-center rounded-[0.25rem] px-2 py-2 text-[0.875rem] leading-[1.5rem] ${
                    mode === AvailableThemes.system && !active
                      ? 'text-brand font-medium'
                      : 'text-light/text-primary dark:text-dark/text-primary font-regular'
                  }`}
                  aria-label="Tema padrão do sistema"
                >
                  <Airplay className="w-6 h-6 mr-2" /> Sistema
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

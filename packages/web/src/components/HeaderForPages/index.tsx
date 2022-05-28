import { LoginAction } from '../LoginAction'
import { ThemeChangeButton } from '../ThemeChangeButton'
import { NavList } from './NavList'

export function HeaderForPages() {
  return (
    <header className="flex justify-between items-center h-[4.5rem] bg-light/surface-secondary dark:bg-dark/surface-secondary px-[10rem]">
      <div className="w-[10rem] h-10 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>

      <NavList />

      <div className="flex items-center gap-4">
        <ThemeChangeButton />
        <div className="w-8 h-8 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
        <div className="w-8 h-8 rounded-[0.5rem] bg-light/surface-secondary-hover dark:bg-dark/surface-secondary-hover"></div>
        <LoginAction />
      </div>
    </header>
  )
}

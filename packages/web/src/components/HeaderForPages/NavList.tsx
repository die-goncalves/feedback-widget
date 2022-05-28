import { NavLink } from 'react-router-dom'

export function NavList() {
  const activeClassName =
    'text-brand hover:text-brand-hover focus:underline focus:underline-offset-4 focus:decoration-brand'
  const notActiveClassName =
    'text-light/text-primary dark:text-dark/text-primary focus:underline focus:underline-offset-4 focus:decoration-text-light/text-primary dark:focus:decoration-text-dark/text-primary'
  const className =
    'flex outline-none outline-offset-0 decoration-2 transition-all duration-300 ease-out'

  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${className} ${isActive ? activeClassName : notActiveClassName}`
            }
          >
            <span className="text-[1rem] leading-[1.5rem] font-medium">
              Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `${className} ${isActive ? activeClassName : notActiveClassName}`
            }
          >
            <span className="text-[1rem] leading-[1.5rem] font-medium">
              Equipe
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/prices"
            className={({ isActive }) =>
              `${className} ${isActive ? activeClassName : notActiveClassName}`
            }
          >
            <span className="text-[1rem] leading-[1.5rem] font-medium">
              Preços
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feedbacks"
            className={({ isActive }) =>
              `${className} ${isActive ? activeClassName : notActiveClassName}`
            }
          >
            <span className="text-[1rem] leading-[1.5rem] font-medium">
              Feedbacks
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

import { useAuth0 } from '@auth0/auth0-react'
import { Menu, Transition } from '@headlessui/react'
import { SignOut, User } from 'phosphor-react'
import { Fragment } from 'react'

export const MenuButton = () => {
  const { logout, user } = useAuth0()

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-12 h-12 rounded-full overflow-hidden items-center justify-center border-none outline-none outline-offset-0 transition-all duration-300 ease-out focus:outline focus:outline-2 focus:outline-brand">
          <img
            className="object-contain"
            src={user?.picture}
            alt={user?.name}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col w-max absolute right-0 mt-2 origin-top-right rounded-md bg-light/surface-primary dark:bg-dark/surface-primary shadow-lg ring-1 ring-opacity-5 ring-black focus:outline-none">
          <div className="flex items-center p-2.5">
            <img
              className="w-10 h-10 mr-2.5 rounded-full object-contain"
              src={user?.picture}
              alt={user?.name}
            />
            <div className="flex flex-col text-light/text-primary dark:text-dark/text-primary">
              <span className="text-[0.875rem] leading-[1.5rem] font-medium">
                {user?.name}
              </span>
              <span className="text-[0.875rem] leading-[1.5rem] font-regular opacity-75">
                {user?.email}
              </span>
            </div>
          </div>
          <div className="p-0.5">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? 'bg-brand text-text-on-brand-color font-medium'
                      : ' text-light/text-primary dark:text-dark/text-primary font-regular'
                  } group flex w-full items-center rounded-md px-2 py-2`}
                >
                  <User className="w-6 h-6 mr-2" />
                  <span className="text-[0.875rem] leading-[1.5rem]">
                    Seu perfil
                  </span>
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="p-0.5">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className={`${
                    active
                      ? 'bg-brand text-text-on-brand-color font-medium'
                      : ' text-light/text-primary dark:text-dark/text-primary font-regular'
                  } group flex w-full items-center rounded-md px-2 py-2`}
                >
                  <SignOut className="w-6 h-6 mr-2" />
                  <span className="text-[0.875rem] leading-[1.5rem]">Sair</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button, Text } from '../common';
import { IconMenu, IconClose } from './';


const defaultRoute = '';

const links = [
  {
    url: `${defaultRoute}home`,
    label: 'incio',
    // icon: <IconInfo />
  },
  {
    url: `${defaultRoute}resume`,
    label: 'curriculum',
  }
];

const otherslinks = [
  {
    url: `${defaultRoute}home`,
    label: 'inicio',
  },
  {
    url: `/`,
    label: 'app',
  }
];

const NavbarModal = ({ stylesButton = '' }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <Button
        onClick={() => setOpenMenu(!openMenu)}
        rightIcon={<IconMenu />}
        text={'menu'}
        title={'menu'}
        styles={stylesButton}
      />

      {
        openMenu &&
        <div className="bg-stone-900/80 aboslute top-0 left-0 fixed h-full w-full z-50">
          <nav className="bg-stone-300 dark:bg-stone-800 absolute rounded-l-lg h-full w-3/4 md:w-1/4 right-0 flex flex-col p-1 md:px-2 border-l-2 border-y-2 border-cyan-800">
            <header className="flex justify-between items-center mb-4">
              <Text tag={'h2'} text={'menu'} styles={'text-lg uppercase'} />

              <Button
                onClick={() => setOpenMenu(!openMenu)}
                rightIcon={<IconClose />}
                styles={'self-end'}
                text={'cerrar'}
                title={'cerrar'}
              />
            </header>

            <section className="flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                {links.map((option, i) =>
                  <li key={i}>
                    <Link
                      href={option.url}
                      onClick={() => setOpenMenu(!openMenu)}
                      className={`text-stone-200 hover:text-cyan-200 flex items-center gap-2 px-4 ${(pathname === ('/' + option.url)) && 'bg-stone-700'}`}
                    ><span className="text-2xl">{option.label}</span>
                    </Link>
                  </li>
                )}
              </ul>

              <a href="cv_pablo_diaz.pdf" download="cv_pablo_diaz.pdf" className="self-center">
                <Button text='descargar CV' />
              </a>

              {/* <div className="flex flex-col gap-2">
                <header>
                  <Text tag={'h3'} text={'otros links'} />
                </header>
                <ul className="flex flex-col gap-4">
                  {otherslinks.map((option, i) =>
                    <li key={i}>
                      <Link
                        href={option.url}
                        onClick={() => setOpenMenu(!openMenu)}
                        className={`flex items-center gap-2 ${(pathname === ('/' + option.url)) ? 'bg-cyan-700' : 'bg-stone-700'}`}
                      >
                        {option.icon}<span className="text-2xl">{option.label}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div> */}
            </section>
          </nav>
        </div>
      }
    </>
  )
}

export { NavbarModal };
import { useState } from 'react';
import { Button, Text } from '../common';
import { IconMoreHoriz, IconMoreVert, } from './';

interface MainModuleProps {
  children: React.ReactNode;
  moduleTitle: string;
  optionsButtons?: Array<JSX.Element>;
  optionsMenu?: Array<JSX.Element>;
  styles?: string;
}

const MainModule = ({
  children,
  moduleTitle,
  optionsButtons,
  optionsMenu,
  styles
}: MainModuleProps) => {
  const [openMenuModule, setOpenMenuModule] = useState(false);

  const mainStyles = `${styles} bg-stone-200 dark:bg-stone-800 h-full w-full lg:w-3/4 border-2 border-green-800 md:rounded-lg grid grid-rows-[auto_1fr] overflow-hidden`;

  return (
    <main className={mainStyles}>
      <header className="bg-green-900 outline outline-2 outline-green-800 p-1 md:px-2 flex justify-between items-center">
        <Text text={moduleTitle} styles="capitalize" size="text-2xl" />

        <div className="flex gap-2 relative">
          {optionsButtons?.length &&
            <ul className='flex gap-2'>
              {optionsButtons.map((option, i) => <li key={i}>{option}</li>)}
            </ul>
          }
          
          {optionsMenu?.length &&
            <>
              <Button rightIcon={openMenuModule ? <IconMoreVert /> : <IconMoreHoriz />} onClick={() => setOpenMenuModule(!openMenuModule)} />
              {
                openMenuModule &&
                <div className="bg-stone-700 absolute top-10 right-0 border-2 border-green-700 md:rounded-lg z-10">
                  <ul>
                    {optionsMenu.map((option, i) =>
                      <li
                        className="hover:bg-stone-600 transition-colors p-1 md:px-2"
                        key={i}
                      >{option}</li>
                    )}
                  </ul>
                </div>
              }
            </>
          }
        </div>
      </header>

      <section className="overflow-hidden">
        {children}
      </section>
    </main>
  );
}

export { MainModule };

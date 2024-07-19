import { useState } from 'react';
import { Button } from '../common';
import { IconClose } from './';

interface ModalWindowProps {
  actionButtonText: string;
  children?: React.ReactNode;
  leftButtonIcon?: JSX.Element;
  modalTitle: string;
  rightButtonIcon?: JSX.Element;
  stylesButton?: string;
}

export function ModalWindow({
  actionButtonText = 'abrir',
  children,
  leftButtonIcon,
  modalTitle,
  rightButtonIcon,
  stylesButton
}: ModalWindowProps): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button
        leftIcon={leftButtonIcon}
        onClick={() => setOpenModal(!openModal)}
        rightIcon={rightButtonIcon}
        text={actionButtonText}
        title={modalTitle}
        styles={stylesButton}
      />

      {
        openModal &&
        <div className="bg-stone-900/80 flex justify-center items-center fixed top-0 left-0 h-screen w-screen p-4 md:px-2 z-50">
          <section className="bg-stone-800 outline outline-2 outline-green-900 rounded-lg h-[80vh] w-full md:w-[60vw] flex flex-col overflow-hidden">
            <header className="bg-green-900 outline outline-2  outline-green-800 flex justify-between items-center p-1 md:px-2">
              <h2 className="text-xl capitalize">{modalTitle}</h2>

              <Button
                onClick={() => setOpenModal(!openModal)}
                rightIcon={<IconClose />}
                text={'cerrar'}
                title={'cerrar ventana'}
              />
            </header>

            <section className="p-1 md:px-2 overflow-y-auto">
              {children}
            </section>
          </section>
        </div>
      }
    </>
  )
}

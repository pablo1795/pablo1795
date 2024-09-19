import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { Button, Text } from "../common";
import { IconMenu, IconClose } from "./";

// const defaultRoute = "";

// const links = [
  // {
  //   url: `${defaultRoute}home`,
  //   label: "incio",
  //   // icon: <IconInfo />
  // },
  // {
  //   url: `${defaultRoute}resume`,
  //   label: "curriculum",
  // },
  // {
  //   url: `${defaultRoute}memory_game`,
  //   label: "juego de memoria",
  // }
// ];

const NavbarModal = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // const pathname = usePathname();

  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Button
        onClick={() => setOpenMenu(!openMenu)}
        rightIcon={<IconMenu />}
        styles={"fixed top-0 right-0 mt-1 mr-4 print:hidden"}
        title={"menu"}
      />

      {
        openMenu &&
        <div className="bg-stone-900/80 aboslute top-0 left-0 fixed h-full w-full z-50">
          <nav className="bg-stone-300 dark:bg-stone-800 absolute rounded-l-lg h-full w-3/4 md:w-1/4 right-0 flex flex-col px-4 py-1 border-l-2 border-y-2 border-cyan-800">
            <header className="flex justify-between items-center mb-4">
              <Text tag={"h2"} text={"menu"} styles={"text-lg uppercase"} />

              <Button
                // text={"cerrar"}
                onClick={() => setOpenMenu(!openMenu)}
                rightIcon={<IconClose />}
                styles={"self-end"}
                title={"cerrar"}
              />
            </header>

            <section className="flex flex-col justify-between h-1/2 gap-4">
              {/* <ul className="flex flex-col gap-4">
                {links.map((option, i) =>
                  <li key={i}>
                    <Link
                      href={option.url}
                      onClick={() => setOpenMenu(!openMenu)}
                      className={`text-stone-200 hover:text-cyan-200 flex items-center gap-2 px-4 ${(pathname === ("/" + option.url)) && "bg-stone-400 dark:bg-stone-700"}`}
                    ><Text text={option.label} styles={"text-2xl"} />
                    </Link>
                  </li>
                )}
              </ul> */}

              <section>
                {/* <Text text={"opciones"} styles={"capitalize"} /> */}

                <div className="grid gap-2">
                  <Button
                    text={theme === "light" ? "modo oscuro" : "modo claro"}
                    onClick={toggleTheme}
                  />

                  <a href="cv_pablo.pdf" download="cv_pablo.pdf">
                    <Button text={"Descargar CV"} styles={"w-full"} />
                  </a>
                </div>
              </section>
            </section>
          </nav>
        </div>
      }
    </>
  )
}

export { NavbarModal };
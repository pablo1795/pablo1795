"use client";
import { useState } from "react";
import { Button, Text } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { IconKeyboardArrowUp, IconKeyboardArrowDown } from '@/components/customized';
import logo_facet from '@/utils/logos/logo_facet.png';
import logo_ministerio from '@/utils/logos/logo_ministerio.png';
import logo_vortex from '@/utils/logos/logo_vortex.png';


const CardLayout1 = (props = {
  date: "",
  description: "",
  details: "",
  title: "",
  url: ""
}) =>
  <article>
    <div className="flex justify-between items-center gap-2">
      <Text tag="h4" text={props.title} styles="text-lg font-semibold uppercase" />
      <Text text={props.date} styles="text-stone-700 italic text-nowrap text-sm text-right" />
    </div>

    <Text text={props.description} />

    <div className="flex gap-2">
      <Text text="tecnologías utilizadas:" />
      <Text text={props.details} />
    </div>

    {props.url && <div className="flex gap-2">
      <Text text="sitio web:" styles="text-stone-700" />
      <Link href={props.url} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline print:text-stone-800 font-medium print:hidden">{props.title}</Link>
      <Link href={props.url} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline print:text-stone-800 font-medium hidden print:block">{props.url}</Link>
    </div>}
  </article>

const CardLayout2 = (props = {
  date: "",
  description: "",
  title: "",
}) =>
  <article>
    <div className="flex justify-between items-center gap-2">
      <Text tag="h4" text={props.description} styles="text-lg font-semibold uppercase" />
      <Text text={props.date} styles="text-stone-700 italic text-nowrap text-sm text-right" />
    </div>
    <Text text={props.title} />
  </article>

const CardLayout3 = (props = {
  description: "",
  title: "",
  url: ""
}) =>
  <div className="flex justify-center items-center gap-2">
    <Text tag="h4" text={props.title} styles="text-lg capitalize" />
    <Link href={props.url} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline text-lg font-bold text-pretty print:text-stone-800">{props.description}</Link>
  </div>

const CardLayout4 = (props = {
  description: "",
  title: "",
  icons: [""]
}) =>
  <article className="dark:bg-stone-800 bg-stone-100 rounded-lg flex flex-col gap-4 p-4">
    <header>
      <Text text={props.title} styles="text-center text-uppercase" />
    </header>

    <Text text={props.description} styles="text-center" />

    <div>
      <figure>
        {/* <img src="./images/icons/html.svg" alt="HTML: ‘lenguaje de marcado de hipertexto " title="HTML" /> */}
        <figcaption>HTML</figcaption>
      </figure>

      <figure>
        {/* <img src="./images/icons/css.svg" alt="CSS: Hojas de estilo en cascada" title="CSS" /> */}
        <figcaption>CSS</figcaption>
      </figure>

      <figure>
        {/* <img src="./images/icons/js.svg" alt="JavaScript" title="JavaScript" /> */}
        <figcaption>JavaScript</figcaption>
      </figure>
    </div>
  </article>

const CardLayout5 = (props = {
  description: "",
  title: "",
  date: ""
}) =>
  <article className="bg-stone-800 text-stone-100 rounded-lg flex flex-col gap-4 p-4">
    <header className="flex justify-between items-start">
      <h3 className="text-uppercase">
        {props.title}</h3>
      <button className="buttonIcon" title="certificados">🏅</button>
    </header>

    <div>
      <h4>{props.description}</h4>
      <span className="text-italic">{props.date}</span>
    </div>
  </article>

const CardWorkExperience = (props = {
  bgFigureDark: false,
  date: "",
  description: "",
  logo: "",
  rol: "",
  technologies: "",
  title: ""
}) => {
  const stylesFigure = props.bgFigureDark ? "bg-stone-100" : "bg-stone-900"
  // const colorFigure = `${props.bgFigure}` || "bg-red-500";

  const [showDescription, setShowDescription] = useState(false);

  return (
    <article className="rounded-lg flex flex-col gap-2 p-2">
      <figure className={`w-4/5 h-20 self-center flex px-2 justify-center items-center ${stylesFigure}`}>
        {
          props.logo === "logo_facet" &&
          <Image src={logo_facet} alt="imagen" width={250} height={1} />
        }
        {
          props.logo === "logo_ministerio" &&
          <Image src={logo_ministerio} alt="imagen" width={250} height={1} />
        }
        {
          props.logo === "logo_vortex" &&
          <Image src={logo_vortex} alt="imagen" width={250} height={1} />
        }
      </figure>

      <header>
        <Text tag="h3" text={props.rol} styles="text-center text-xl font-semibold" />
        <Text tag="h4" text={props.title} styles="text-center font-semibol" />
      </header>

      {
        showDescription &&
        <div className="flex flex-col gap-2">
          <div>
            <Text tag="h4" text="descripción:" styles="uppercase underline font-semibo" />
            <Text text={props.description} />
          </div>

          <div>
            <Text tag="h4" text="tecnologías:" styles="uppercase underline font-semibo" />
            <Text text={props.technologies} />
          </div>

          <div>
            <Text tag="h4" text="periodo:" styles="uppercase underline font-semibo" />
            <Text text={props.date} styles="italic" />
          </div>
        </div>
      }

      <Button rightIcon={showDescription ? <IconKeyboardArrowUp /> : <IconKeyboardArrowDown />} title="más información" styles="self-center" onClick={() => setShowDescription(!showDescription)} />
    </article>)
}

export {
  CardLayout1,
  CardLayout2,
  CardLayout3,
  CardLayout4,
  CardLayout5,
  CardWorkExperience
};
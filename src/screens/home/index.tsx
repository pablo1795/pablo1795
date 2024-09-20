import Link from "next/link";
import dataLeng from "@/libs/language/lang-es.json";
import { Button, Text } from "@/components/common";

const ListWorkExperience = () => dataLeng.data.work_experience.map((work, index) =>
  <article key={index} className="bg-stone-300 dark:bg-stone-700 border-2 border-stone-500 px-2 py-1 rounded-md">
    <div className="flex justify-between gap-2">
      <Link href={work.url} target="_blank" title={`Link a ${work.title}`} aria-label={`Link to ${work.title}`}>
        <Text
          styles={"hover:text-cyan-700 font-semibold uppercase underline text-balance"}
          tag={"h4"}
          text={work.title}
        />
      </Link>

      <Text text={work.date} styles={"italic text-nowrap text-sm text-right"} />
    </div>

    <Text text={work.description} />
  </article>
)

const ListEducations = () => dataLeng.data.educations.map((dataEducation, index) =>
  <article key={index} className="bg-stone-300 dark:bg-stone-700 border-2 border-stone-500 p-1 rounded-md grid items-center">
    <Text tag={"h4"} text={dataEducation.description} styles={"text-center text-balance font-semibold uppercase"} />
    <Text text={dataEducation.title} styles={"text-center"} />
  </article>
)

const HomeScreen = () => {
  return (
    <>
      <section className="bg-cyan-800 border-2 border-stone-500 grid gap-y-2 w-full md:w-3/4 lg:w-2/3 mx-auto p-2 print:0 rounded-b-xl mb-4 print:hidden">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <Text lightText text={"Desarrollador Web:"} styles={"text-xl font-bold"} />
          <Text lightText text={"HTML, CSS, JavaScript, PHP, React"} styles={"text-xl font-bold"} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <Text lightText text={"Disponibilidad Horaria:"} styles={"text-lg"} />
          <Text lightText text={"Tiempo Completo"} styles={"text-xl font-bold"} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <Text lightText text={"Trabajo Remoto:"} styles={"text-lg"} />
          <Text lightText text={"Con todas las herramientas necesarias"} styles={"text-xl font-bold"} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <Text lightText text={"Remuneración Pretendida:"} styles={"text-lg"} />
          <Text lightText text={"500 dólares mensuales"} styles={"text-xl font-bold"} />
        </div>
      </section>

      <section className="bg-stone-200 dark:bg-stone-800 border-2 border-stone-500 print:border-0 grid gap-2 w-full md:w-3/4 lg:w-2/3 mx-auto p-2 sm:p-4 print:0 rounded-xl">
        <header className="grid sm:grid-cols-2 sm:items-center">
          <Text
            styles={"text-3xl md:text-4xl text-center sm:text-left font-black uppercase"}
            tag={"h1"}
            text={dataLeng.pages.resume.title.cv}
          />

          <div className="grid">
            {dataLeng.pages.resume.personal_info.professions.map((info = "", index = 0) =>
              <Text
                key={index}
                styles={"text-lg md:text-xl text-center sm:text-right font-semibold text-nowrap uppercase"}
                tag={"h2"}
                text={info}
              />
            )}
          </div>
        </header>

        <section className="grid sm:grid-cols-2 gap-2 print:gap-10 mb-4 print:mb-0">
          <div>
            <div className="flex gap-1 items-center">
              <Text text={`${dataLeng.pages.resume.personal_info.fullnameTitle}:`} styles={"md:text-lg capitalize"} />
              <Text text={dataLeng.pages.resume.personal_info.fullname} styles={"text-lg font-bold"} />
            </div>

            <div className="flex gap-1 items-center">
              <Text text={`${dataLeng.pages.resume.personal_info.nationalityTitle}:`} styles={"md:text-lg capitalize"} />
              <Text text={dataLeng.pages.resume.personal_info.nationality} styles={"text-lg font-bold"} />
            </div>

            <div className="flex gap-1 items-center">
              <Text text={`Mail:`} styles={"md:text-lg capitalize"} />
              <Link href="mailto:pablo.diaz1795@gmail.com" className="hover:text-cyan-700 text-lg font-bold underline print:no-underline" title={`Enviar e-mail a pablo.diaz1795@gmail.com`} aria-label={`Send E-mail to pablo.diaz1795@gmail.com`}>
                pablo.diaz1795@gmail.com
              </Link>
            </div>

            <div className="flex gap-1 items-center">
              <Text text={`${dataLeng.pages.resume.personal_info.githubTitle}:`} styles={"md:text-lg capitalize"} />
              <Link href={dataLeng.pages.resume.personal_info.githubUrl} className="hover:text-cyan-700 text-lg font-bold underline print:no-underline" target="_blank" title={`Link a ${dataLeng.pages.resume.personal_info.githubName}`} aria-label={`Link to ${dataLeng.pages.resume.personal_info.githubName}`}>
                {dataLeng.pages.resume.personal_info.githubName}
              </Link>
            </div>

            <div className="flex print:hidden">
              <a href="cv_pablo.pdf" download={"cv_pablo.pdf"}>
                <Button text={"Descargar CV"} title={"Descargar Curriculum Vitae"} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <Text text={dataLeng.pages.resume.personal_info.greeting1} styles={"text-xl pl-5 font-bold capitalize"} />
            <Text text={dataLeng.pages.resume.personal_info.greetingResume} styles={"text-balance text-center"} />
          </div>
        </section>

        <main className="grid gap-10 print:gap-2">
          <section className="flex flex-col gap-2">
            <header>
              <Text text={dataLeng.pages.resume.title.experience} styles={"text-center font-bold text-xl sm:text-2xl uppercase"} />
            </header>

            <section className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
              <ListWorkExperience />
            </section>
          </section>

          <section className="flex flex-col gap-2">
            <header>
              <Text text={dataLeng.pages.resume.title.studies} styles={"text-center font-bold text-xl sm:text-2xl uppercase"} />
            </header>

            <section className="grid sm:grid-cols-3 gap-x-4 gap-y-2">
              <ListEducations />
            </section>
          </section>
        </main>
      </section>
    </>
  );
}

export { HomeScreen };

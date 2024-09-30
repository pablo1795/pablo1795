import Link from "next/link";
import dataLeng from "@/libs/language/lang-es.json";
import { Button } from "@/components/common";

const ListWorkExperience = () => dataLeng.data.work_experience.map((work, index) =>
  <article key={index} className="bg-stone-300 dark:bg-stone-700 border-2 border-stone-500 px-2 py-1 rounded-md">
    <div className="flex justify-between gap-2">
      <Link href={work.url} target="_blank" title={`Link a ${work.title}`} aria-label={`Link to ${work.title}`}>
        <h4 className="hover:text-cyan-700 font-semibold uppercase underline text-balance">
          {work.title}
        </h4>
      </Link>

      <p className="italic text-nowrap text-sm text-right">{work.date}</p>
    </div>

    <p>{work.description}</p>
  </article>
);

const ListEducations = () => dataLeng.data.educations.map((dataEducation, index) =>
  <article key={index} className="bg-stone-300 dark:bg-stone-700 border-2 border-stone-500 p-1 rounded-md grid items-center">
    <h4 className="text-center text-balance font-semibold uppercase">
      {dataEducation.description}
    </h4>
    <p className="text-center">{dataEducation.title}</p>
  </article>
);

const ResumeScreen = () => {
  return (
    <section className="bg-stone-200 dark:bg-stone-800 border-2 border-stone-500 print:border-0 grid gap-2 w-full md:w-3/4 lg:w-2/3 mx-auto p-2 sm:p-4 print:0 rounded-xl">
      <header className="grid sm:grid-cols-2 sm:items-center">
        <h1 className="text-3xl md:text-4xl text-center sm:text-left font-black uppercase">
          {dataLeng.pages.resume.title.cv}
        </h1>

        <div className="grid">
          {dataLeng.pages.resume.personal_info.professions.map((info = "", index = 0) =>
            <h2 key={index} className="text-lg md:text-xl text-center sm:text-right font-semibold text-nowrap uppercase">
              {info}
            </h2>
          )}
        </div>
      </header>

      <section className="grid sm:grid-cols-2 gap-2 print:gap-10 mb-4 print:mb-0">
        <div>
          <div className="flex gap-1 items-center">
            <p className="md:text-lg capitalize">{`${dataLeng.pages.resume.personal_info.fullnameTitle}:`}</p>
            <p className="text-lg font-bold">{dataLeng.pages.resume.personal_info.fullname}</p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="md:text-lg capitalize">{`${dataLeng.pages.resume.personal_info.nationalityTitle}:`}</p>
            <p className="text-lg font-bold">{dataLeng.pages.resume.personal_info.nationality}</p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="md:text-lg capitalize">Mail:</p>
            <Link href="mailto:pablo.diaz1795@gmail.com" className="hover:text-cyan-700 text-lg font-bold underline print:no-underline" title={`Enviar e-mail a pablo.diaz1795@gmail.com`} aria-label={`Send E-mail to pablo.diaz1795@gmail.com`}>
              pablo.diaz1795@gmail.com
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <p className="md:text-lg capitalize">{`${dataLeng.pages.resume.personal_info.githubTitle}:`}</p>
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
          <p className="text-xl pl-5 font-bold capitalize">{dataLeng.pages.resume.personal_info.greeting1}</p>
          <p className="text-balance text-center">{dataLeng.pages.resume.personal_info.greetingResume}</p>
        </div>
      </section>

      <main className="grid gap-10 print:gap-2">
        <section className="flex flex-col gap-2">
          <header>
            <p className="text-center font-bold text-xl sm:text-2xl uppercase">
              {dataLeng.pages.resume.title.experience}
            </p>
          </header>

          <section className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
            <ListWorkExperience />
          </section>
        </section>

        <section className="flex flex-col gap-2">
          <header>
            <p className="text-center font-bold text-xl sm:text-2xl uppercase">
              {dataLeng.pages.resume.title.studies}
            </p>
          </header>

          <section className="grid sm:grid-cols-3 gap-x-4 gap-y-2">
            <ListEducations />
          </section>
        </section>
      </main>
    </section>
  );
};

export { ResumeScreen };

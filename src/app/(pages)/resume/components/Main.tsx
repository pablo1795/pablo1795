import Image from "next/image";
import Link from "next/link";
import dataLeng from "@/libs/lenguaje/data-es.json";
import foto1 from "./foto1.jpeg";
import { CardLayout1, CardLayout2, ContentSectionLayout, Text } from "@/components";

const Main = () => {
  const ListWorkExperience = () => dataLeng.data.work_experience.map((work, index) =>
    <CardLayout1
      key={index}
      date={work.date}
      description={work.description}
      details={work.details}
      title={work.title}
      url={work.url}
    />
  )

  const ListEducations = () => dataLeng.data.educations.map((dataEducation, index) =>
    <CardLayout2
      key={index}
      date={dataEducation.date}
      description={dataEducation.description}
      title={dataEducation.title}
    />
  )

  return (
    <main className="grid gap-2">
      <section className="grid sm:grid-cols-2 gap-2 print:gap-2">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <Text text={dataLeng.pages.resume.personal_info.full_name} styles="font-bold text-2xl uppercase" />

            <div className="flex gap-2">
              <Text text={`${dataLeng.pages.resume.personal_info.nationalityTitle}:`} styles="capitalize font-semibold" />
              <Text text={dataLeng.pages.resume.personal_info.nationality} styles="capitalize wrap" />
            </div>

            <div className="flex gap-2">
              <Text text={`E-mail:`} styles="capitalize font-semibold" />
              <Link href="pablo.diaz1795@gmail.com" target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800">pablo.diaz1795@gmail.com</Link>
            </div>

            <div className="flex gap-2">
              <Text text={`${dataLeng.pages.resume.personal_info.githubTitle}:`} styles="capitalize font-semibold" />
              <Link href={dataLeng.pages.resume.personal_info.githuburl} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800 print:hidden">{dataLeng.pages.resume.personal_info.githubName}</Link>
              <Link href={dataLeng.pages.resume.personal_info.githuburl} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800 hidden print:block">{dataLeng.pages.resume.personal_info.githuburl}</Link>
            </div>

            <div className="flex gap-2">
              <Text text={`${dataLeng.pages.resume.personal_info.linkedinTitle}:`} styles="capitalize font-semibold" />
              <Link href={dataLeng.pages.resume.personal_info.linkedinUrl} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800 print:hidden">{dataLeng.pages.resume.personal_info.linkedinName}</Link>
              <Link href={dataLeng.pages.resume.personal_info.linkedinUrl} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800 hidden print:block">{dataLeng.pages.resume.personal_info.linkedinUrl}</Link>
            </div>
          </div>

          {/* <figure className="hidden print:block rounded-xl overflow-hidden">
            <Image src={foto1} alt="foto perfil" height={160} width={160} />
          </figure> */}
        </div>

        <div>
          <Text text={dataLeng.pages.resume.personal_info.greeting1} styles="text-xl font-semibold capitalize" />
          <Text text={dataLeng.pages.resume.personal_info.greeting2} />
          {/* <p className="text-stone-800 dark:text-stone-200 font-medium px-2 text-pretty"></p> */}
        </div>
      </section>

      <ContentSectionLayout title={dataLeng.pages.resume.title.experience}>
        <ListWorkExperience />
      </ContentSectionLayout>

      <ContentSectionLayout title={dataLeng.pages.resume.title.studies}>
        <ListEducations />
      </ContentSectionLayout>
    </main>
  );
}

export { Main };

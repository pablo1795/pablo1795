"use client";
import dataLeng from "@/libs/lenguaje/data-es.json";
import { HeaderBanner } from "./components";
import { Footer } from "../resume/components";
import { Text } from "@/components/common";
import { ContentSectionLayout, CardLayout4, CardLayout5, CardWorkExperience } from "@/components";
import { IconAndroidLogo, IconCsharp, IconCSS, IconHTML, IconJS, IconNextJS, IconPHP, IconTailwind, IconTypeScript, IconWordPress } from "@/utils/icons-svg/technologies";

export default function Home() {
  const ListWorkExperience = () => dataLeng.data.work_experience.map((work, index) =>
    <CardWorkExperience
      key={index}
      bgFigureDark={work.bgFigureDark || false}
      date={work.date}
      description={work.description}
      logo={work.logo}
      rol={work.role}
      title={work.title}
      technologies={work.details}
    />
  )

  const ListStudies = () => dataLeng.data.studies.map((study, index) =>
    <CardLayout5
      key={index}
      description={study.description}
      title={study.title}
      date={study.date}
    />
  )

  const ListTechnologies = () => dataLeng.data.technologies.map((technology, index) =>
    <CardLayout4
      key={index}
      description={technology.description}
      title={technology.title}
      icons={technology.technologies}
    />
  )

  return (
    <div className="flex flex-col items-center gap-10">
      <HeaderBanner />

      <main className="flex flex-col gap-6 sm:w-3/4">
        <section className="bg-stone-800 w-full grid gap-4 p-4 rounded-lg">
          <header>
            <Text text="conocimientos en..." color="text-stone-200" />
          </header>

          <div className="flex gap-4 justify-evenly items-center flex-wrap">
            <figure title="HTML">
              <IconHTML />
            </figure>

            <figure title="CSS">
              <IconCSS />
            </figure>

            <figure title="TAILWIND CSS">
              <IconTailwind />
            </figure>


            <figure title="JAVASCRIPT">
              <IconJS />
            </figure>

            <figure title="TYPESCRIPT">
              <IconTypeScript />
            </figure>

            <figure title="NEXT JS">
              <IconNextJS />
            </figure>


            <figure title="PHP">
              <IconPHP />
            </figure>

            <figure title="WORDPRESS">
              <IconWordPress />
            </figure>

            <figure title="C#">
              <IconCsharp />
            </figure>

            <figure title="ANDROID">
              <IconAndroidLogo />
            </figure>
          </div>
        </section>

        <ContentSectionLayout title="Experiencia Laboral">
          <div className="grid sm:grid-cols-3 gap-4">
            <ListWorkExperience />
          </div>
        </ContentSectionLayout>

        <ContentSectionLayout title="Estudios Realizados">
          <div className="grid md:grid-cols-3 gap-4">
            <ListStudies />
          </div>
        </ContentSectionLayout>

        {/* <ContentSectionLayout title="tecnologias que domino">
          <div className="grid grid-cols-3 gap-4">
            <ListTechnologies />
            
          </div>
        </ContentSectionLayout> */}
      </main>

      <Footer />
    </div>
  );
}

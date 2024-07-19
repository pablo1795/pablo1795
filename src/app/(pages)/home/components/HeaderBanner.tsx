"use client";
import { Text } from "@/components/common";
import dataLeng from "@/libs/lenguaje/data-es.json";
import { ListProfessions } from "../../resume/components/Header";

const HeaderBanner = () => {

  return (
    <section className="w-full flex flex-col md:flex-row gap-4 md:justify-center md:items-center md:flex-wrap">
      <div className="flex flex-col md:p-4 rounded-lg md:w-2/5">
        <div className="self-center md:self-start flex items-end gap-2">
          <Text text="¡Hola mundo!" size="text-4xl" />
          <Text text="soy" size="text-2xl" />
        </div>

        <Text text="Pablo Diaz" size="text-6xl" styles="self-center md:self-start" />

        <Text text={dataLeng.pages.resume.personal_info.greeting2} styles="self-center" />
      </div>

      <ListProfessions />
    </section >
  );
}

export { HeaderBanner };
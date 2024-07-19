import { Text } from "@/components";

const ContentSectionLayout = (props = {
  children: <></>,
  title: ""
}) =>
  <section className="flex flex-col gap-2">
    <header>
      <Text text={props.title} styles="text-2xl text-center font-bold underline uppercase" />
    </header>

    <div className="flex flex-col gap-2">
      {props.children}
    </div>
  </section>

export { ContentSectionLayout };
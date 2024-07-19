import { Text } from '../common';

interface CardDescriptionProps {
  alingSelf?: string;
  content: string;
  image?: string;
  styles?: string;
  title: string;
}

const CardDescription = ({
  alingSelf = "lg:self-center",
  content,
  image,
  styles,
  title
}: CardDescriptionProps) => {
  const stylesCompomponent = `bg-stone-200 dark:bg-stone-800 outline outline-2 outline-green-700 rounded-xl p-1 md:px-2 flex flex-col lg:w-3/5 ${alingSelf}`;

  return (
    <section className={`${stylesCompomponent} ${styles}`}>
      {image && <div className="w-1/2 self-center bg-purple-500 text-center">
        {image}
      </div>}

      <div className="flex flex-col gap-2">
        <Text
          size="text-2xl"
          styles="text-center uppercase"
          tag="h2"
          text={title}
          weight="font-bold"
        />

        <Text
          text={content}
          weight="font-medium"
        />
      </div>
    </section>
  );
};

export { CardDescription };

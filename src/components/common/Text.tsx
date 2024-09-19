interface TextProps {
  children?: React.ReactNode;
  styles?: string;
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string;
  darkText?: boolean;
  lightText?: boolean;
}

const Text = ({
  children,
  darkText = false,
  lightText = false,
  styles,
  tag: Tag = "p",
  text
}: TextProps) => {
  const colorDefaultText = "text-stone-800 dark:text-stone-200";
  const colorDarkText = "text-stone-800";
  const colorLightText = "text-stone-200";

  // const colorText = (colorDisabledText &% colorDarkText) || (disabled ? "text-stone-500" : colorDefaultText);
  const colorText = (darkText && colorDarkText) || (lightText && colorLightText) || colorDefaultText;

  return (
    <Tag className={`${colorText} ${styles}`}>
      {children || text}
    </Tag>
  );
}

export { Text };
interface TextProps {
  children?: React.ReactNode;
  color?: string;
  disabled?: boolean;
  size?: string;
  styles?: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  weight?: 'font-thin' | 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
}

const Text = ({
  children,
  color = 'text-stone-800 darktext-stone-200',
  disabled = false,
  size = 'text-base',
  styles,
  tag: Tag = 'p',
  text,
  weight = 'font-medium'
}: TextProps) => {
  const colorText = disabled ? 'text-stone-500' : color;

  return (
    <Tag className={`${colorText} ${weight} ${size} ${styles}`}>
      {children || text}
    </Tag>
  );
}

export { Text };

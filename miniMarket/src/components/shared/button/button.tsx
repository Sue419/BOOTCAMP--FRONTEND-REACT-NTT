interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  ...rest
}) => {
  return (
    <button onClick={onClick} className={` ${className}`} {...rest}>
      {children}
    </button>
  );
};

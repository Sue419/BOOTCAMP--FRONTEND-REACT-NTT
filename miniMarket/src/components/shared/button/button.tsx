interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  children,
  disabled = false,
  ...rest
}) => {
  return (
    <button 
    onClick={onClick} 
      className={className} 
      disabled={disabled}
      {...rest}
      >
      {children}
    </button>
  );
};

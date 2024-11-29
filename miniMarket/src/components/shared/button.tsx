interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  className,
}) => {
  return (
    <button onClick={onClick} className={`btn ${className || ""}`}>
      {label}
    </button>
  );
};

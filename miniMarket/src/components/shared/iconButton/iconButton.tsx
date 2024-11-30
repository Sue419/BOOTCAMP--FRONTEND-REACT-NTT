interface IconButtonProps {
    onClick?: () => void;
    icon: string;
    alt: string;
    className?: string;
    children?: React.ReactNode;
  }
  
  const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    alt,
    className,
    children,
  }) => {
    return (
      <button onClick={onClick} className={`icon-btn ${className}`}>
        <img src={icon} alt={alt} />
        {children}
      </button>
    );
  };
  
  export default IconButton;
  
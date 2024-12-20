import { Link } from "react-router-dom";

interface IconButtonProps {
    onClick?: () => void;
    icon: string;
    alt: string;
    className?: string;
    children?: React.ReactNode;
    link?: string;
  }
  
  const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    alt,
    className,
    children,
    link,
  }) => {
    if (link) {
      return (
        <Link to={link} className={`icon-btn ${className}`}>
          <img src={icon} alt={alt} />
          {children}
        </Link>
      );
    }
  
    return (
      <button onClick={onClick} className={`icon-btn ${className}`}>
        <img src={icon} alt={alt} />
        {children}
      </button>
    );
  };
  
  export default IconButton;
  
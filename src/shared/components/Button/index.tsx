import { FC, ReactNode } from "react";
import "./button.scss";

interface IProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IProps> = ({
  children,
  onClick,
  className = "",
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

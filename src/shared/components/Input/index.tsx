import { FC, HTMLInputTypeAttribute } from "react";
import "./input.scss";

interface IProps {
  type?: HTMLInputTypeAttribute;
  className?: string;
  value?: string;
  onChange: (value: string) => void;
}
const Input: FC<IProps> = ({
  type = "text",
  className = "",
  onChange,
  value,
}) => {
  return (
    <input
      value={value}
      className={`${className} input`}
      type={type}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;

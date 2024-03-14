import React from "react";
import { Link } from "react-router-dom";

interface IButtonProps {
  title: string;
  onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  link?: boolean;
  path?: string;
  className?: string;
  style?: React.CSSProperties;
}

const AppButton: React.FC<IButtonProps> = ({
  onChange,
  title,
  link = false,
  path = "/",
  className = "",
  style = undefined,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const buttonClassName = `outline-none text-white w-[200px] max-w-[200px] border-none bg-darkBlue hover:bg-darkBlue/80 py-3 px-5 rounded-lg ${className}`;
  const wrapperClassName = ` flex items-center justify-start`;

  if (link) {
    return (
      <Link to={path} className={wrapperClassName}>
        <button
          onChange={handleChange}
          style={style}
          className={buttonClassName}
        >
          {title}
        </button>
      </Link>
    );
  }

  return (
    <div className={wrapperClassName}>
      <button style={style} onChange={handleChange} className={buttonClassName}>
        {title}
      </button>
    </div>
  );
};

export default AppButton;

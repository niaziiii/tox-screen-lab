import React from "react";

interface AppInputProps {
  title: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: any) => void;
  className?: string;
  name?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  type,
  placeholder,
  value,
  title,
  className = "",
  name,
  onChange,
}) => {
  if (type === "textarea") {
    return (
      <div className="w-full">
        <label htmlFor={title} className="text-darkBlue text-xs ">
          {title}
        </label>
        <textarea
          value={value}
          className={`rounded-[10px] w-full bg-lightGray text-dark px-4 py-3 outline-none border-none mt-4 ${className}`}
          onChange={(e) => onChange?.(e)}
          rows={4}
        />
      </div>
    );
  }
  return (
    <div className="w-full ">
      <label htmlFor={title} className="text-darkBlue text-xs ">
        {title}
      </label>
      <input
        type={type}
        name={name ? name : title}
        className={`rounded-[10px] w-full bg-lightGray text-dark px-4 py-3 outline-none border-none mt-4 ${className}`}
        id={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AppInput;

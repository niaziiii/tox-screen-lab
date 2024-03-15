import React from "react";

interface AppInputProps {
  title: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppInput: React.FC<AppInputProps> = ({
  type,
  placeholder,
  value,
  title,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={title} className="text-darkBlue text-xs ">
        {title}
      </label>
      <input
        type={type}
        name={title}
        className="rounded-[10px] w-full bg-lightGray text-dark px-4 py-3 outline-none border-none mt-4"
        id={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AppInput;

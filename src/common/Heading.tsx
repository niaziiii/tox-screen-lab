import React from "react";

interface IHeadingProps {
  title: string;

  className?: string;
  style?: React.CSSProperties;
}

const AppHeading: React.FC<IHeadingProps> = ({
  title,
  className = "",
  style,
}) => {
  const classes = `text-2xl md:text-4xs font-semibold text-darkBlue w-auto ${className}`;
  return (
    <div style={style}>
      <h1 className={classes}>{title}</h1>
    </div>
  );
};

export default AppHeading;

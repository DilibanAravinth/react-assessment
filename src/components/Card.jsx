import React from "react";

const Card = ({ styles, title, subTitle, children }) => {
  const { fontSize, fontWeight, padding, borderRounded } = styles;

  let classNames = `${borderRounded} ${fontSize} ${fontWeight} ${padding} bg-c_white w-[577px] h-[564px] p-8 flex flex-col flex-wrap`;

  return (
    <div className={`${classNames}`}>
        <div className="font-normal flex justify-between">
          <p className="text-xl tracking-wider	">{title}</p>
          <p className="text-base font-medium">{subTitle}</p>
        </div>
        {children}
    </div>
  );
};

Card.defaultProps = {
  styles: {
    fontSize: "text-base",
    fontWeight: "font-medium",
    padding: "p-8",
    borderRounded: "rounded-lg",
  },
  content: "Card content",
};

export default Card;

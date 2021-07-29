import React from "react";

interface Props {
  img: string;
  text: string;
  classNames?: string;
}
export default function IconText({ img, text, classNames }: Props) {
  return (
    <div className={`flex gap-2 ${classNames}`}>
      <img src={img} alt="icon" className="w-4" />
      <p>{text}</p>
    </div>
  );
}

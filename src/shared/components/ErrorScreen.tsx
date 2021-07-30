import React from "react";

interface Props {
  img: string;
  text: string;
}
export default function ErrorScreen({ img, text }: Props) {
  return (
    <div className="flex flex-col gap-2 min-h-87vh justify-center items-center">
      <img src={img} alt="img" className="w-3/12" />
      <p className="font-semibold text-xl">{text}</p>
    </div>
  );
}

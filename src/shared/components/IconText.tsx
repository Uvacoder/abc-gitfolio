interface Props {
  img: string;
  text: string | number;
  classNames?: string;
}
export default function IconText({ img, text, classNames }: Props) {
  return (
    <div className={`flex gap-2 justify-center sm:justify-start ${classNames}`}>
      <img src={img} alt="icon" className="w-4" />
      <p>{text}</p>
    </div>
  );
}

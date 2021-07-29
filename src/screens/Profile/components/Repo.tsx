import IconText from "../../../shared/components/IconText";

import Star from "../../../assets/images/star.svg";
import Fork from "../../../assets/images/fork.svg";
export default function Repo() {
  return (
    <div>
      <div className="bg-white border rounded border-lightgray flex flex-col max-w-sm p-6 gap-3 m-2">
        <h1 className="font-medium gradient-text text-xl">18CSC304J-CD-LAB</h1>
        <p className="text-darkgray">
          A supercalifragilisticexpialidocious developer Portfolio, Built on
          NextJS.
        </p>
        <div className="flex gap-2">
          <IconText text="123" img={Star} />
          <IconText text="123" img={Fork} />
        </div>
      </div>
    </div>
  );
}

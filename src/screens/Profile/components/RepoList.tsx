import Link from "../../../assets/images/open.svg";
import { random } from "../../../shared/constant";
import Repo from "./Repo";

export default function RepoList() {
  return (
    <div className="w-full mx-auto">
      <div className="mx-auto bg-white border border-gray rounded-md w-10/12 mt-8 ">
        <Header />
        <div className="flex flex-row flex-wrap justify-center items-center">
          {random.map((e, index) => {
            return <Repo key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="flex p-6 justify-between border-gray border-b mb-6">
      <h1>Harsh's Repository</h1>
      <div className="flex gap-2 justify-center items-center">
        <h1 className="text-primary font-medium">View All</h1>
        <img src={Link} alt="" className="w-4" />
      </div>
    </div>
  );
}

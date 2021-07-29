import IconText from "../../../shared/components/IconText";
import Location from "../../../assets/images/map.svg";
import People from "../../../assets/images/people.svg";
import Repo from "../../../assets/images/repository.svg";
import Link from "../../../assets/images/link.svg";
import Twitter from "../../../assets/images/twitter.svg";

export default function Head() {
  return (
    <div className="rlative w-full mx-auto">
      <div className="absolute top-0 left-0 right-0 gradient-bg h-72 w-screen -z-10" />
      <div className="relative bg-white mx-auto border border-gray rounded-md w-10/12 mt-32 flex flex-col md:flex-row p-6 gap-5">
        <div className="absolute right-0 top-0 flex m-6 gap-4">
          <img src={Link} alt="" />
          <img src={Twitter} alt="" />
        </div>
        <img
          className="w-48 rounded"
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="user"
        />
        <div className="mt-4">
          <h1 className="gradient-text font-bold text-4xl">Harsh Goyal</h1>
          <div className="mt-6 flex flex-col gap-1">
            <IconText img={Repo} text="20" />
            <IconText img={People} text="20 Followers || 200 Following" />
            <IconText img={Location} text="Chennai" />
          </div>
        </div>
      </div>
    </div>
  );
}

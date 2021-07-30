import IconText from "../../../shared/components/IconText";
import Location from "../../../assets/images/map.svg";
import People from "../../../assets/images/people.svg";
import Repo from "../../../assets/images/repository.svg";
import Link from "../../../assets/images/link.svg";
import Twitter from "../../../assets/images/twitter.svg";

export default function Head({ user }: any) {
  console.log(user);
  return (
    <div className="w-full mx-auto">
      <div className="absolute top-0 left-0 right-0 gradient-bg h-72 -z-10" />
      <div className="relative bg-white mx-auto border border-gray rounded-md w-10/12 mt-32 flex flex-col sm:flex-row p-6 gap-5">
        <div className="hidden sm:flex absolute right-0 top-0  m-6 gap-4">
          <a href={`https://${user.blog}`} target="_blank" rel="noreferrer">
            <img src={Link} alt="website" />
          </a>
          <a
            href={`https://twitter.com/${user.twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
        <img
          className="w-48 rounded mx-auto sm:mx-0"
          src={user.avatar_url}
          alt="user"
        />
        <div className="mt-4">
          <h1 className="gradient-text font-bold text-4xl text-center sm:text-left">
            {user.name || user.login}
          </h1>
          <div className="mt-6 flex flex-col gap-1">
            <IconText img={Repo} text={user.public_repos} />
            <IconText
              classNames="hidden sm:flex"
              img={People}
              text={`${user.followers} Followers || ${user.following} Following`}
            />
            {user.location && <IconText img={Location} text={user.location} />}
          </div>
        </div>
      </div>
    </div>
  );
}

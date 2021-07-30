import IconText from "../../../shared/components/IconText";
import Star from "../../../assets/images/star.svg";
import Fork from "../../../assets/images/fork.svg";

export default function Repo({ repo }: any) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer">
      <div className="bg-white border rounded border-lightgray flex flex-col w-64  h-48 lg:w-96 p-6 m-2 justify-between">
        <h1 className="font-medium gradient-text text-xl">{repo.name}</h1>
        <p className="text-darkgray break-words">
          {repo.description ||
            "There's no description for this repository as of now!"}
        </p>
        <div className="flex gap-2">
          <IconText text={repo.stargazers_count} img={Star} />
          <IconText text={repo.forks_count} img={Fork} />
        </div>
      </div>
    </a>
  );
}
